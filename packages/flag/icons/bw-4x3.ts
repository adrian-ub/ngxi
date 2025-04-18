import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBw4x3Icon],svg[flag-bw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#00cbff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 160h640v160H0z"></svg:path><svg:path fill="#000001" d="M0 186h640v108H0z"></svg:path></svg:g>`,
})
export class FlagBw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
