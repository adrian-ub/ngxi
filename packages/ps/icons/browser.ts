import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBrowserIcon],svg[ps-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 3H43Q25 3 12.5 15.5T0 45v363q0 21 21 21h470q21 0 21-21V45q0-17-12.5-29.5T469 3m0 384H43V152h426zm0-278H43V45h426zm-277 86H85v149h107zm-43 106h-21v-64h21zm86-106h192v42H235zm0 85h149v43H235z"></svg:path>`,
})
export class PsBrowserIcon {
  readonly viewBox = input("0 0 512 472")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
