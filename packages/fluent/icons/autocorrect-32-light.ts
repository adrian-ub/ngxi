import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutocorrect32LightIcon],svg[fluent-autocorrect-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.895 7.15c.983-1.534 3.226-1.534 4.21 0L21.852 13H19.5a6.5 6.5 0 1 0 5.256 2.675L23.682 14H29.5a.5.5 0 1 0 0-1h-6.46l-4.095-6.389c-1.377-2.148-4.516-2.148-5.893 0L2.079 23.731a.5.5 0 0 0 .842.54zm10.037 9.092l.384.6a5.5 5.5 0 1 1-.385-.6"></svg:path>`,
})
export class FluentAutocorrect32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
