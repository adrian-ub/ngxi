import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBaby0203AltIcon],svg[healthicons-baby-0203-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path fill-rule="evenodd" d="M15 16.447V34.04c0 3.412 2.813 7.96 9 7.96c6.188 0 9-3.98 9-7.959v-.855c-1.444-3.67-4.435-7.343-8.014-10.434a41 41 0 0 0-6.371-4.522a31 31 0 0 1-.568-.317A31 31 0 0 0 15 16.447m10.032 3.744q.64.51 1.261 1.048c2.6 2.245 4.969 4.839 6.707 7.592V17c-3.042 2.178-5.51 3.186-7.968 3.191" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBaby0203AltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
