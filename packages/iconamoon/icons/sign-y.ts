import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignYIcon],svg[iconamoon-sign-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 21h.525a2.64 2.64 0 0 0 2.248-1.256l6.29-10.22A1 1 0 0 0 15.21 8H14"></svg:path><svg:path d="M12 16L9.487 9.298A2 2 0 0 0 7.614 8H7"></svg:path></svg:g>`,
})
export class IconamoonSignYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
