import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTwoDimensionalCodeIcon],svg[icon-park-twotone-two-dimensional-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTwoDimensionalCode0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14z"></svg:path><svg:path stroke-linecap="round" d="M29 28v14m12-14v14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTwoDimensionalCode0)"></svg:path>`,
})
export class IconParkTwotoneTwoDimensionalCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
