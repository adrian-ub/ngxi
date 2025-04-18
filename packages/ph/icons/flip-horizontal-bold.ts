import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalBoldIcon],svg[ph-flip-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 20.41a19.83 19.83 0 0 0-22.4 11.81c-.07.15-.13.31-.19.46L21.47 192.49A20 20 0 0 0 40 220h60a20 20 0 0 0 20-20V40a19.83 19.83 0 0 0-16-19.59M96 196H45.79L96 62.09Zm138.53-3.51L174.61 32.68c-.06-.15-.12-.31-.19-.46A20 20 0 0 0 136 40v160a20 20 0 0 0 20 20h60a20 20 0 0 0 18.54-27.51ZM160 196V62.09L210.21 196Z"></svg:path>`,
})
export class PhFlipHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
