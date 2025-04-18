import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUserAlertIcon],svg[marketeq-user-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M37.604 42.708h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M37.5 27.083v6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M27.083 43.75H12.5a2.083 2.083 0 0 1-2.083-2.083a14.59 14.59 0 0 1 6.375-12.021l.166-.104a2.084 2.084 0 0 0 .417-2.917a12.35 12.35 0 0 1-2.792-7.875a12.5 12.5 0 0 1 24.834-2.083c.12.687.176 1.385.166 2.083"></svg:path></svg:g>`,
})
export class MarketeqUserAlertIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
