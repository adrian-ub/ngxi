import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMc4x3Icon],svg[flag-mc-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#f31830" d="M0 0h640v240H0z"></svg:path><svg:path fill="#fff" d="M0 240h640v240H0z"></svg:path></svg:g>`,
})
export class FlagMc4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
