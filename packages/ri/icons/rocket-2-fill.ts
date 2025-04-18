import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRocket2FillIcon],svg[ri-rocket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.498 20.005h7.004A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502M18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545c3.496 1.098 6 4.062 6 7.545zm-6-3.805a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiRocket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
