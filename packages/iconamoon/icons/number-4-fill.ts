import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber4FillIcon],svg[iconamoon-number-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.196 3.02a1 1 0 0 1 .785 1.176l-1.522 7.608a1 1 0 0 0 .98 1.196H15V8a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-5h-4.56a3 3 0 0 1-2.942-3.588l1.521-7.608a1 1 0 0 1 1.177-.785" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
