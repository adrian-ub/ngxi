import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeaker16RegularIcon],svg[fluent-beaker-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3H6v3.689a2.5 2.5 0 0 1-.34 1.26l-2.215 3.795A1.5 1.5 0 0 0 4.741 14h6.518a1.5 1.5 0 0 0 1.296-2.256L10.34 7.95A2.5 2.5 0 0 1 10 6.689V3h.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1M7 6.689V3h2v3.689a3.5 3.5 0 0 0 .477 1.764l.32.547H6.203l.32-.547A3.5 3.5 0 0 0 7 6.689M5.62 10h4.76l1.31 2.248a.5.5 0 0 1-.431.752H4.74a.5.5 0 0 1-.432-.752z"></svg:path>`,
})
export class FluentBeaker16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
