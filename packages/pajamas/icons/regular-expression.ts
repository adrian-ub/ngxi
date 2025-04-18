import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasRegularExpressionIcon],svg[pajamas-regular-expression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.25 1.75a.75.75 0 0 0-1.5 0v3.451L5.761 3.475a.75.75 0 1 0-.75 1.3L8 6.5L5.011 8.225a.75.75 0 1 0 .75 1.3L8.75 7.799v3.451a.75.75 0 0 0 1.5 0V7.8l2.989 1.725a.75.75 0 1 0 .75-1.3L11 6.5l2.989-1.725a.75.75 0 1 0-.75-1.3L10.25 5.201zM3 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class PajamasRegularExpressionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
