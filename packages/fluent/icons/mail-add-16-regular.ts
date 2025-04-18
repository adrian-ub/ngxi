import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAdd16RegularIcon],svg[fluent-mail-add-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H11zm1 9.5v-2.207q.524-.149 1-.393V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.022a5.6 5.6 0 0 0 0 1H3a1 1 0 0 0-1 1v.74l5 2.692l.544-.293q.517.331 1.104.542l-1.41.76a.5.5 0 0 1-.475 0L2 8.875V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentMailAdd16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
