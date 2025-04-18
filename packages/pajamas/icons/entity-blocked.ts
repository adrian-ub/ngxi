import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasEntityBlockedIcon],svg[pajamas-entity-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5M4 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm6.217 8.156a2.5 2.5 0 0 0-3.373-3.373zm-1.06 1.061a2.5 2.5 0 0 1-3.373-3.373l3.372 3.373ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path>`,
})
export class PajamasEntityBlockedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
