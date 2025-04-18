import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGh4x3Icon],svg[flag-gh-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006b3f" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fcd116" d="M0 0h640v320H0z"></svg:path><svg:path fill="#ce1126" d="M0 0h640v160H0z"></svg:path><svg:path fill="#000001" d="m320 160l52 160l-136.1-98.9H404L268 320z"></svg:path>`,
})
export class FlagGh4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
