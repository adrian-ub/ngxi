import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PencilCircleFillIcon],svg[f7-pencil-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m8.977-30.328l-2.696-2.695l1.664-1.64c.75-.727 1.594-.798 2.274-.118l.515.516c.68.68.61 1.5-.117 2.273Zm-16.29 16.219l-3.117 1.172c-.515.187-1.055-.282-.82-.844l1.289-3.023l14.883-14.86l2.695 2.672Z"></svg:path>`,
})
export class F7PencilCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
