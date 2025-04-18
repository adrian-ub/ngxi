import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTomlIcon],svg[logos-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9C4221" d="M198.472 0v28.764h25.888v198.472h-25.888V256H256V0z"></svg:path><svg:path d="M64.719 83.416V51.775h126.562v31.641H143.82v138.067h-31.64V83.416z"></svg:path><svg:path fill="#9C4221" d="M57.528 0v28.764H31.64v198.472h25.888V256H0V0z"></svg:path>`,
})
export class LogosTomlIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
