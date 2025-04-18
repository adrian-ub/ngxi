import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointBottomRightIcon],svg[ix-reference-point-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 192V64H320v42.667h85.333V192zm-341.333 0v-85.333H192V64H64v128zM64 448V320h42.667v85.333H192V448zm384 0V320H320v128zm-42.667-42.667h-42.666v-42.666h42.666z"></svg:path>`,
})
export class IxReferencePointBottomRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
