import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonAvailable32LightIcon],svg[fluent-person-available-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9a7 7 0 1 1 14 0A7 7 0 0 1 9 9m7-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m.375 15H7.5A3.5 3.5 0 0 0 4 21.5v.667C4 24.317 6.766 30 16 30q.64 0 1.238-.035q-.466-.453-.865-.968Q16.189 29 16 29c-8.766 0-11-5.316-11-6.833V21.5A2.5 2.5 0 0 1 7.5 19h8.204q.303-.524.671-1m7.125-2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m4.53 4.72a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.97 1.97l4.72-4.72a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentPersonAvailable32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
