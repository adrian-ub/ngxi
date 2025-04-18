import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCz4x3Icon],svg[flag-cz-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v240H0z"></svg:path><svg:path fill="#d7141a" d="M0 240h640v240H0z"></svg:path><svg:path fill="#11457e" d="M360 240L0 0v480z"></svg:path>`,
})
export class FlagCz4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
