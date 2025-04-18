import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommunicationPerson24FilledIcon],svg[fluent-communication-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13a8 8 0 0 1 15.809-1.747a3.5 3.5 0 0 1 2.147 2.69Q22 13.478 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.922 7.065a1 1 0 0 0 1.416-1.413A7.97 7.97 0 0 1 4 13m13.69-1.906a6 6 0 1 0-9.934 6.149a1 1 0 1 0 1.416-1.415a4 4 0 1 1 6.737-3.681a3.5 3.5 0 0 1 1.782-1.053M10 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m11 1.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentCommunicationPerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
