import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowDownRightSquareFillIcon],svg[f7-arrow-down-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m22.922-28.008c1.125 0 1.875.844 1.875 2.063v12.164c0 1.523-.82 2.133-2.156 2.133H24.168c-1.195 0-1.992-.727-1.992-1.899c0-1.125.82-1.898 2.039-1.898h4.71l3.821.422l-4.031-3.75l-9.516-9.516c-.375-.375-.61-.867-.61-1.383c0-1.172.727-1.922 1.876-1.922c.633 0 1.101.211 1.476.586l9.516 9.516l3.727 3.984l-.375-4.03V23.56c0-1.22.726-1.993 1.898-1.993"></svg:path>`,
})
export class F7ArrowDownRightSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
