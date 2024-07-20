import {DataTable} from '@/components/table/Datatable'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {columns} from '@/components/table/columns'



const Admin = async () => {
  const appointments = await getRecentAppointmentList()

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className="admin-header">
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={32}
            width={162}
            alt='Logo'
            className='h-8 w-fit'
          />
        </Link>
        <p className="text-16-semi-bold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋👋👋</h1>
          <p className="text-dark-700">Start the day with managing new appointments</p>
        </section>

        <section className="admin-stat">
          <StatCard
            type='appointment'
            count={appointments.scheduledCount}
            label='Schedule appointment'
            icon='/assets/icons/appointments.svg'
          />
          <StatCard
            type='pending'
            count={appointments.pendingCount}
            label='Pending appointment'
            icon='/assets/icons/pending.svg'
          />
          <StatCard
            type='cancelled'
            count={appointments.cancelledCount}
            label='Cancelled appointment'
            icon='/assets/icons/cancelled.svg'
          />
        </section>

        <DataTable 
          data={appointments.documents}
          columns={columns}
        />
      </main>
    </div>
  )
}

export default Admin