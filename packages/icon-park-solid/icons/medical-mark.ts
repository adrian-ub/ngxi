import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMedicalMarkIcon],svg[icon-park-solid-medical-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMedicalMark0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M16 15a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8 4v40m0-25h8M8 29h8"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 24h12m-6-6v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMedicalMark0)"></svg:path>`,
})
export class IconParkSolidMedicalMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
