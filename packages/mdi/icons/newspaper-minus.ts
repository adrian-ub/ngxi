import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperMinusIcon],svg[mdi-newspaper-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-2-6V8H4v3zm-7 2v1.68c-.63.95-1 2.09-1 3.32c0 1.09.29 2.12.8 3H4a2 2 0 0 1-2-2V3l1.67 1.67L5.33 3L7 4.67L8.67 3l1.66 1.67L12 3l1.67 1.67L15.33 3L17 4.67L18.67 3l1.66 1.67L22 3v10.5a6.14 6.14 0 0 0-4-1.5c-1.23 0-2.37.37-3.32 1zm-2 6v-6H4v6z"></svg:path>`,
})
export class MdiNewspaperMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
