import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoAltFillIcon],svg[lets-icons-info-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-14a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm-1.5 4a1 1 0 1 0 0 2h.5v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1v-3a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsInfoAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
