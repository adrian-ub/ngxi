import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber4SquareFillIcon],svg[iconamoon-number-4-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4.001a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm8.462 3.274a1 1 0 1 0-1.924-.55l-1.271 4.45A3 3 0 0 0 11.152 15H13.5v2a1 1 0 1 0 2 0v-7a1 1 0 1 0-2 0v3h-2.348a1 1 0 0 1-.962-1.275z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber4SquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
