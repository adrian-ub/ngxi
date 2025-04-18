import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChecklistIcon],svg[octicon-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 8.5l-6 6l-3-3L8.5 10l1.5 1.5L14.5 7L16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z" fill="currentColor"></svg:path>`,
})
export class OcticonChecklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
