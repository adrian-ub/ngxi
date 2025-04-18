import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentBulletListClock20FilledIcon],svg[fluent-document-bullet-list-clock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.5 5.5 0 0 1-1.235-3H8.5a.5.5 0 0 1 0-1h.522a5.5 5.5 0 0 1 .185-1H8.5a.5.5 0 0 1 0-1h1.1q.276-.538.657-1H8.5a.5.5 0 0 1 0-1h2.837c.895-.63 1.986-1 3.163-1a5.5 5.5 0 0 1 1.5.207V8h-4.5A1.5 1.5 0 0 1 10 6.5m-4 4a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5 1.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path><svg:path d="M11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5m8 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H15z"></svg:path></svg:g>`,
})
export class FluentDocumentBulletListClock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
