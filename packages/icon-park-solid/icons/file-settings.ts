import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFileSettingsIcon],svg[icon-park-solid-file-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFileSettings0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m30 4l10 10"></svg:path><svg:circle cx="24" cy="27" r="5" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 19v3m0 10v3m5.828-14l-2.121 2.121M19.828 31l-2.121 2.121M18 21l2.121 2.121M28 31l2.121 2.121M16 27h3m10 0h3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFileSettings0)"></svg:path>`,
})
export class IconParkSolidFileSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
