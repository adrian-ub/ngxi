import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCastMultiple28FilledIcon],svg[fluent-cast-multiple-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6.75A3.75 3.75 0 0 1 10.75 3h11.5A3.75 3.75 0 0 1 26 6.75v9.5A3.75 3.75 0 0 1 22.25 20H17v-1.75a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 1 11.75 25h-6A3.75 3.75 0 0 1 2 21.25v-5.5A3.75 3.75 0 0 1 5.75 12h3.5a.75.75 0 0 0 0-1.5H7zm4.5 3.999c0 .414.336.75.75.75a3.75 3.75 0 0 1 3.749 3.749a.75.75 0 0 0 1.5 0a5.25 5.25 0 0 0-5.249-5.25a.75.75 0 0 0-.75.75m.75-4.249a.75.75 0 0 0 0 1.5a7.25 7.25 0 0 1 7.255 7.248a.75.75 0 0 0 1.5 0c0-4.836-3.92-8.748-8.755-8.748M14 14.75a1.25 1.25 0 1 0-2.5-.001a1.25 1.25 0 0 0 2.5 0"></svg:path>`,
})
export class FluentCastMultiple28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
