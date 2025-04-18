import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCone16RegularIcon],svg[fluent-cone-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-2.229 0-6-.421-6-2q0-.06.014-.117l.047-.2a.5.5 0 0 1 .036-.1l5.453-11.3a.52.52 0 0 1 .9 0l5.453 11.3a.5.5 0 0 1 .036.1l.047.2Q14 12.94 14 13c0 1.579-3.771 2-6 2m-4.99-1.981c.197.34 2.025.98 4.99.98c2.94 0 4.763-.628 4.988-.99l-.009-.038L8 2.65z"></svg:path>`,
})
export class FluentCone16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
