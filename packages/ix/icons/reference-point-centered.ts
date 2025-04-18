import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReferencePointCenteredIcon],svg[ix-reference-point-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320v128H320v-42.667h85.333V320zm-341.333 0v85.333H192V448H64V320zM320 192v128H192V192zm-42.667 42.667h-42.666v42.666h42.666zM448 64v128h-42.667v-85.333H320V64zm-256 0v42.667h-85.333V192H64V64z"></svg:path>`,
})
export class IxReferencePointCenteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
