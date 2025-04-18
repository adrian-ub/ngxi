import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTowTruckIcon],svg[hugeicons-tow-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.002 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9.996 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M12.004 12L6.006 3m0 0l2 10m-2-10H3.838c-.19 0-.349.161-.372.375L3.133 6.43c.62 0 1.124.575 1.124 1.285S3.754 9 3.133 9c-.49 0-.97-.358-1.125-.857M19 19c2.683 0 3-.928 3-3.488c0-1.225 0-1.837-.24-2.354c-.25-.54-.702-.877-1.652-1.565c-.943-.684-1.614-1.452-2.253-2.51c-.912-1.51-1.367-2.265-2.05-2.674C15.12 6 14.314 6 12.702 6h-.7v7"></svg:path><svg:path d="M5.007 18.996s-1.16.01-1.52-.036c-.3-.12-.664-.402-.9-.558c-.72-.479-.575-.282-.575-.714l-.004-3.682v-.96c0-.06-.062-.047.4-.04H21.48M9.005 19.002h5.998"></svg:path></svg:g>`,
})
export class HugeiconsTowTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
