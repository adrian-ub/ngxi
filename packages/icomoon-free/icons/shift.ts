import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShiftIcon],svg[icomoon-free-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 14h-5a.5.5 0 0 1-.5-.5V8H3a.5.5 0 0 1-.354-.854l5-5a.5.5 0 0 1 .707 0l5 5a.499.499 0 0 1-.354.854h-2v5.5a.5.5 0 0 1-.5.5zM6 13h4V7.5a.5.5 0 0 1 .5-.5h1.293L8 3.207L4.207 7H5.5a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class IcomoonFreeShiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
