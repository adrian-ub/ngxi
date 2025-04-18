import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLinkBreakOutlineIcon],svg[flowbite-link-break-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.213 9.787a3.39 3.39 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961M19.573 20l-1.787-1.786m0 0L16 16.427m1.786 1.787l1.787-1.787m-1.787 1.787L16 20"></svg:path>`,
})
export class FlowbiteLinkBreakOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
