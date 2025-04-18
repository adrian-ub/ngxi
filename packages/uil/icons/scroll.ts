import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilScrollIcon],svg[uil-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 9.71a1 1 0 0 0 1.42 0l5-5a1 1 0 1 0-1.42-1.42L12 7.59l-4.29-4.3a1 1 0 0 0-1.42 1.42Zm1.42 4.58a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilScrollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
