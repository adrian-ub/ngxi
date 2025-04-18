import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMedicalFilesIcon],svg[icon-park-twotone-medical-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMedicalFiles0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 42H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v11.5"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M36.636 27C39.046 27 41 28.88 41 31.2c0 3.02-2.91 5.6-4.364 7Q35.182 39.6 33 41q-2.182-1.4-3.636-2.8C27.909 36.8 25 34.22 25 31.2c0-2.32 1.954-4.2 4.364-4.2c1.517 0 2.854.746 3.636 1.878A4.4 4.4 0 0 1 36.636 27Z"></svg:path><svg:path stroke-linecap="round" d="M15 14h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMedicalFiles0)"></svg:path>`,
})
export class IconParkTwotoneMedicalFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
