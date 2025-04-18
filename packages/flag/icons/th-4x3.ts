import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTh4x3Icon],svg[flag-th-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#f4f5f8" d="M0 0h640v480H0z"></svg:path><svg:path fill="#2d2a4a" d="M0 162.5h640v160H0z"></svg:path><svg:path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z"></svg:path></svg:g>`,
})
export class FlagTh4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
