import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalVuetifyIcon],svg[devicon-original-vuetify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1697f6" d="M65.3 34.414L40.84 76.79L64 116.926l30.672-53.13l30.66-53.128H79Zm0 0"></svg:path><svg:path fill="#aeddff" d="m33.34 63.797l1.605 2.793l22.88-39.649l9.402-16.273H2.668Zm0 0"></svg:path><svg:path fill="#1867c0" d="M79 10.668C90.594 48.82 64 116.926 64 116.926L40.84 76.789Zm0 0"></svg:path><svg:path fill="#7bc6ff" d="M67.227 10.668c-48.844 0-32.282 55.922-32.282 55.922Zm0 0"></svg:path>`,
})
export class DeviconOriginalVuetifyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
