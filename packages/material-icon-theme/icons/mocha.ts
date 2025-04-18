import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMochaIcon],svg[material-icon-theme-mocha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a1887f" d="M22 14c-.002 7.41-.07 10.857-2.486 14h-7.028C10.07 24.857 10.002 21.41 10 14zm.823-2H9.177A1.266 1.266 0 0 0 8 13.342C8 22 8 26 11.546 30h8.908C24 26 24 22 24 13.342A1.266 1.266 0 0 0 22.823 12m-4.82-9.998c1.15.46 2 2.075 2 3.998c0 1.925-.851 3.54-2.003 4V7.998c-1.15-.46-2-2.074-2-3.998s.851-3.54 2.003-4ZM13 6.004A2.11 2.11 0 0 1 14 8a2.1 2.1 0 0 1-1 2V9a2.11 2.11 0 0 1-1-1.998a2.1 2.1 0 0 1 1-1.998Z"></svg:path><svg:path fill="#a1887f" d="M16 20h-3c0 2 1 4 1 6h4c0-2 1-4 1-6Z"></svg:path>`,
})
export class MaterialIconThemeMochaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
