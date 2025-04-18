import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareRemoveIcon],svg[circum-square-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.937H5.563a2.5 2.5 0 0 1-2.5-2.5V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5M5.563 4.063a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.563a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M13.767 14.477a.5.5 0 0 0 .71-.71L12.707 12l1.77-1.77a.5.5 0 0 0-.71-.7L12 11.3l-1.77-1.77a.5.5 0 0 0-.7.7c.59.59 1.17 1.18 1.77 1.77l-1.77 1.77c-.46.45.25 1.16.7.71L12 12.707Z"></svg:path>`,
})
export class CircumSquareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
