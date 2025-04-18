import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarFilledIcon],svg[ix-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 170.667V448H64V170.667zM192 320h-42.667v42.667H192zm85.333 0h-42.666v42.667h42.666zm85.334 0H320v42.667h42.667zM192 234.667h-42.667v42.666H192zm85.333 0h-42.666v42.666h42.666zm85.334 0H320v42.666h42.667zM64 64h384v64H64z"></svg:path>`,
})
export class IxCalendarFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
