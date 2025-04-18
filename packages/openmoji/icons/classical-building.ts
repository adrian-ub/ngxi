import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClassicalBuildingIcon],svg[openmoji-classical-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M18.54 26h34.92v25.95H18.54z"></svg:path><svg:path fill="#fff" d="M12 56h48v4H12zm2.13-34h43.74v4H14.13zm1.59 30h40.55v4H15.72zm2.78-26h4v26h-4z"></svg:path><svg:path fill="#fff" d="M27.35 26.15h4v26h-4zm22.17-.2h3.941v26H49.52zM36 12l-17 9.75h34zm4.35 14.15h4v26h-4z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="2" d="M11.99 55.89H60v3.993H11.99z"></svg:path><svg:path stroke-width="2.001" d="M14.18 21.76h43.65v3.999H14.18z"></svg:path><svg:path stroke-width="2" d="M15.27 51.76h41.47v3.993H15.27z"></svg:path><svg:path stroke-width="1.702" d="M18.35 25.61h4.298v26.3H18.35zm9 0h4.298v26.3H27.35zm22 0h4.298v26.3H49.35z"></svg:path><svg:path stroke-width="1.916" d="m36 12l-17 9.75h34z" transform="matrix(1.091 0 0 .9982 -3.283 .098)"></svg:path><svg:path stroke-width="1.702" d="M40.35 25.61h4.298v26.3H40.35z"></svg:path></svg:g>`,
})
export class OpenmojiClassicalBuildingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
