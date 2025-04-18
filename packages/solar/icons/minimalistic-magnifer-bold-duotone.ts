import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBoldDuotoneIcon],svg[solar-minimalistic-magnifer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
