import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber0SquareThinIcon],svg[iconamoon-number-0-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M12 17c1.657 0 3-1.4 3-3.125v-3.75C15 8.399 13.657 7 12 7s-3 1.4-3 3.125v3.75C9 15.601 10.343 17 12 17Z"></svg:path></svg:g>`,
})
export class IconamoonNumber0SquareThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
