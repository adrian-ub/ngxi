import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInboxAdd24FilledIcon],svg[fluent-mail-inbox-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H16V3.5a.5.5 0 0 1 1 0V6h2.503a.5.5 0 1 1 0 1zm2.5 7v-1.732A6.5 6.5 0 0 0 21 11.19v7.56A3.25 3.25 0 0 1 17.75 22H6.25A3.25 3.25 0 0 1 3 18.75V7.25A3.25 3.25 0 0 1 6.25 4h4.248a6.5 6.5 0 0 0-.422 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V14H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.5 0A.75.75 0 0 1 15 14z"></svg:path>`,
})
export class FluentMailInboxAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
