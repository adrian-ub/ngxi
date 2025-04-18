import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTelescopeIcon],svg[icon-park-twotone-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTelescope0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="38" x="6" y="5" rx="6"></svg:rect><svg:rect width="12" height="38" x="30" y="5" rx="6"></svg:rect><svg:path fill="#555" d="M12 43a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm24 0a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M30 21a6 6 0 0 0-12 0m12 10a6 6 0 0 0-12 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTelescope0)"></svg:path>`,
})
export class IconParkTwotoneTelescopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
