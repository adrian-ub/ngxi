import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9SquareIcon],svg[iconamoon-number-9-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="currentColor" d="M10.164 16.452a1 1 0 0 0 1.672 1.096zm5.197-4.283a1 1 0 0 0-1.672-1.096zM10 10a2 2 0 0 1 2-2V6a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm2 2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H8a4 4 0 0 0 4 4zm-.164 5.548l3.525-5.38l-1.672-1.095l-3.525 5.379z"></svg:path></svg:g>`,
})
export class IconamoonNumber9SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
