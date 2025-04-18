import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSmartCardIcon],svg[pajamas-smart-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 7h3v1a1 1 0 0 1-1 1H6zm-2 2h1V9H3v1a1 1 0 0 0 1 1m3-6h1a1 1 0 0 1 1 1v2H7zM4 5a1 1 0 0 0-1 1v2h3V5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSmartCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
