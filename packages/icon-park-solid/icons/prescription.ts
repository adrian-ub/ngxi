import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPrescriptionIcon],svg[icon-park-solid-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPrescription0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M8 8a2 2 0 0 1 2-2h17v12h13v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m27 6l13 12M27.024 6v12.082H40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 30h12m-6-6v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPrescription0)"></svg:path>`,
})
export class IconParkSolidPrescriptionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
