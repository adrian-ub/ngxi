import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMouseIcon],svg[iconamoon-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z"></svg:path><svg:path stroke-linecap="round" d="M12 7v4"></svg:path></svg:g>`,
})
export class IconamoonMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
