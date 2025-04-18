import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCirclePauseFilledIcon],svg[ix-circle-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 469.334c117.821 0 213.334-95.513 213.334-213.334c0-117.82-95.513-213.333-213.334-213.333C138.18 42.667 42.667 138.18 42.667 256c0 117.821 95.513 213.334 213.333 213.334m-64-298.667h42.667v170.667H192zm85.334 0H320v170.667h-42.666z"></svg:path>`,
})
export class IxCirclePauseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
