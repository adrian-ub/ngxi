import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFolderSettingsIcon],svg[icon-park-solid-folder-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFolderSettings0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="24" cy="28" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 21v3m0 8v3m4.828-12l-2.121 2.121M20.828 31l-2.121 2.121M19 23l2.121 2.121M27 31l2.121 2.121M17 28h3m8 0h3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFolderSettings0)"></svg:path>`,
})
export class IconParkSolidFolderSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
