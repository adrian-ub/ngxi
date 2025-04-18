import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlug2FillIcon],svg[ri-plug-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4zm4-12h2a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2zm-5 8.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M11 2h2v3h-2z"></svg:path>`,
})
export class RiPlug2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
