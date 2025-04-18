import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBoldIcon],svg[solar-minimalistic-magnifer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
