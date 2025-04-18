import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisWebGridAltIcon],svg[uis-web-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h8V10H2zm11 1h8c.6 0 1-.4 1-1V10h-9z"></svg:path>`,
})
export class UisWebGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
