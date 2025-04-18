import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft03Icon],svg[hugeicons-drag-left-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.066 9.722h.937c1.036 0 1.875.846 1.875 1.89m0 0v.944m0-.945a.94.94 0 0 1 .937-.944c1.036 0 1.875.845 1.875 1.889m0 0v.944m0-.944c0-.495.44-.871.925-.79l.32.054c.905.152 1.567.94 1.567 1.863v.447c0 2.052 0 3.079-.31 3.896c-.18.474-.655 1.078-1.035 1.515c-.329.378-.53.857-.53 1.36V22m-6.561-10.389V6.417c0-.783-.63-1.417-1.406-1.417c-.777 0-1.406.634-1.406 1.417v7.52l-1.52-1.535a1.57 1.57 0 0 0-2.352.131a1.61 1.61 0 0 0-.03 1.958l3.374 4.342c.645.831.996 2.112.996 3.167"></svg:path><svg:path d="M13.457 9.5A4 4 0 0 0 15.515 6c0-2.21-1.787-4-3.992-4a3.996 3.996 0 0 0-3.991 4a4 4 0 0 0 2.057 3.5M7.304 6.023H2.498m0 0c0 .47.513.694.834.988l1.177.999M2.498 6.023c0-.47.52-.724.834-1.022L4.509 3.99"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
