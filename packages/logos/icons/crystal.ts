import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCrystalIcon],svg[logos-crystal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M93.365 0L0 93.741l34.258 128.376L163.011 256L256 161.882L222.117 35.388zM6.776 95.247l124.988-32.754l-34.258 124.612z"></svg:path>`,
})
export class LogosCrystalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
