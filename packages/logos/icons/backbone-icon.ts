import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBackboneIconIcon],svg[logos-backbone-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#002A41" d="M0 0v171.945L127.984 244.9v-49.592l-85.62-48.807v-76.66l85.62 48.806V72.956z"></svg:path><svg:path fill="#0071B5" d="M255.967 0v171.945L127.984 244.9v-49.592l85.619-48.807v-76.66l-85.62 48.806V72.956z"></svg:path><svg:path fill="#0071B5" d="M0 317.933V145.988l127.984-72.956v49.592l-85.62 48.806v72.761l85.62-48.806v49.592z"></svg:path><svg:path fill="#002A41" d="M255.967 317.933V145.988L127.984 73.032v49.592l85.619 48.806v72.761l-85.62-48.806v49.592z"></svg:path>`,
})
export class LogosBackboneIconIcon {
  readonly viewBox = input("0 0 256 318")
  readonly width = input("0.81em")
  readonly height = input("1em")
}
