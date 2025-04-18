import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonOptionsThinIcon],svg[iconamoon-options-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 8h9m4 0h3m-9 8h9M4 16h3"></svg:path><svg:circle cx="9" cy="16" r="2"></svg:circle><svg:circle cx="15" cy="8" r="2"></svg:circle></svg:g>`,
})
export class IconamoonOptionsThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
