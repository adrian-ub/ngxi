import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSolidityIcon],svg[material-icon-theme-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0288d1"><svg:path d="m5.747 14.046l6.254 8.61l6.252-8.61l-6.254 3.807z"></svg:path><svg:path d="M11.999 1.343L5.747 11.83l6.252 3.807l6.253-3.807z"></svg:path></svg:g>`,
})
export class MaterialIconThemeSolidityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
