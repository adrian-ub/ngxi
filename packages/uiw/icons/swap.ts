import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwSwapIcon],svg[uiw-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.299 13.098a.7.7 0 0 1 .498 1.191l-5.427 5.503a.7.7 0 1 1-.996-.984l4.252-4.31H.703a.7.7 0 0 1 0-1.4zM6.619.202a.7.7 0 0 1 .007.99l-4.252 4.31h16.923a.7.7 0 0 1 0 1.4H.7a.7.7 0 0 1-.498-1.191L5.63.208a.7.7 0 0 1 .99-.006"></svg:path>`,
})
export class UiwSwapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
