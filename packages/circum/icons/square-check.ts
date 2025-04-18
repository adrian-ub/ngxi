import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareCheckIcon],svg[circum-square-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.939H5.563a2.5 2.5 0 0 1-2.5-2.5V5.566a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5M5.563 4.066a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.566a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M15.81 10.4c.45-.46-.26-1.17-.71-.71l-3.56 3.56c-.58-.58-1.16-1.15-1.73-1.73a.5.5 0 0 0-.71.71l2.08 2.08a.513.513 0 0 0 .71 0Z"></svg:path>`,
})
export class CircumSquareCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
