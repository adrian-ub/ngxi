import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseSquareIcon],svg[iconamoon-close-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 10l-4 4m0-4l4 4"></svg:path>`,
})
export class IconamoonCloseSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
