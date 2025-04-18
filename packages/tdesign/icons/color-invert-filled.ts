import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignColorInvertFilledIcon],svg[tdesign-color-invert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2.586l-5.01 5.01A8.5 8.5 0 0 0 11 22.048zm2 19.462a8.5 8.5 0 0 0 3.085-.985a8.5 8.5 0 0 0 1.913-1.434a7.5 7.5 0 0 0 1.918-2.919a8.5 8.5 0 0 0-1.906-9.114L13 2.586z"></svg:path>`,
})
export class TdesignColorInvertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
