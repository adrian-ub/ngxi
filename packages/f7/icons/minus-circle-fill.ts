import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MinusCircleFillIcon],svg[f7-minus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-9.914-21.82c-1.383 0-2.344-.727-2.344-2.04c0-1.335.914-2.085 2.344-2.085H37.89c1.43 0 2.32.75 2.32 2.086c0 1.312-.938 2.039-2.32 2.039Z"></svg:path>`,
})
export class F7MinusCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
