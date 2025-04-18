import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointBottomLeftIcon],svg[ix-reference-point-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 192V64H320v42.667h85.333V192zm-341.333 0v-85.333H192V64H64v128zM448 448V320h-42.667v85.333H320V448zm-256 0V320H64v128zm-42.667-42.667h-42.666v-42.666h42.666z"></svg:path>`,
})
export class IxReferencePointBottomLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
