import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMaleOutline24pxIcon],svg[healthicons-male-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 3.75a1 1 0 1 0 0 2h3.106l-2.924 2.965A7.001 7.001 0 0 0 4.734 19.23a7 7 0 0 0 10.599-9.085l2.917-2.96V9.75a1 1 0 1 0 2 0v-6zM6.148 17.815a5 5 0 1 0 7.071-7.071a5 5 0 0 0-7.07 7.07" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMaleOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
