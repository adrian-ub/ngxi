import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBd4x3Icon],svg[flag-bd-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006a4e" d="M0 0h640v480H0z"></svg:path><svg:circle cx="280" cy="240" r="160" fill="#f42a41"></svg:circle>`,
})
export class FlagBd4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
