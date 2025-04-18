import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHospital1FilledIcon],svg[tdesign-hospital-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.413 10.917L11.999 1.66L4.34 8.5l-2.75 2.405l1.318 1.505L4 11.454V22h4.5v-6h7v6H20V11.449l1.084.963zM13 9h2v2h-2v2h-2v-2H9V9h2V7h2z"></svg:path><svg:path fill="currentColor" d="M10.5 22v-4h3v4z"></svg:path>`,
})
export class TdesignHospital1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
