import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBullhornIcon],svg[meteor-icons-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a2 2 0 0 0 2 2h5q6 0 11 4V3q-5 4-11 4H5a2 2 0 0 0-2 2Zm7-5v12a2 2 0 0 1-4 0v-5"></svg:path>`,
})
export class MeteorIconsBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
