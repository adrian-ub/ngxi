import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOrbit01Icon],svg[hugeicons-orbit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path d="M18.646 4.528a2 2 0 1 0 2.708 2.944a2 2 0 0 0-2.708-2.944m0 0A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q0-.507-.05-1"></svg:path></svg:g>`,
})
export class HugeiconsOrbit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
