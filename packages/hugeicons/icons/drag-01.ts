import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag01Icon],svg[hugeicons-drag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.964 4h-3.992m3.992 0c0 .56-1.491 1.607-1.996 2m1.996-2c0-.56-1.491-1.607-1.996-2M2.999 4h3.992M3 4c0-.56 1.491-1.607 1.996-2M3 4c0 .56 1.491 1.607 1.996 2m4.819 16v-.94a3 3 0 0 0-.598-1.798l-3.823-5.109c-.318-.424-.554-.939-.409-1.449c.36-1.259 1.783-2.378 3.374-.407l1.6 1.708V3.594c.098-1.83 3.173-2.407 3.491 0v5.933c1.483-.19 8.466.851 7.45 5.265l-.144.636c-.207.918-.816 2.552-1.487 3.508c-.699.995-.372 2.6-.452 3.066" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
