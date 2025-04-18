import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTransform2Icon],svg[tdesign-transform-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v15h6v2H6V8H1V6h5V1zm2 5h8v10h5v2h-5v5h-2V8h-6z"></svg:path>`,
})
export class TdesignTransform2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
