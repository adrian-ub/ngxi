import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faArrowsVIcon],svg[fa-arrows-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 320q0 26-19 45t-45 19H448v1024h128q26 0 45 19t19 45t-19 45l-256 256q-19 19-45 19t-45-19L19 1517q-19-19-19-45t19-45t45-19h128V384H64q-26 0-45-19T0 320t19-45L275 19q19-19 45-19t45 19l256 256q19 19 19 45"></svg:path>`,
})
export class FaArrowsVIcon {
  readonly viewBox = input("0 0 640 1792")
  readonly width = input("0.36em")
  readonly height = input("1em")
}
