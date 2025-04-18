import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLifeHackingIcon],svg[pixel-life-hacking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.503 18.504v3h-1v1h-1.001v1.001h-2v-1h-1v-1h-1v-3.001zm5.001-11.003v4.001h-1v2h-1v1.001h-1.001v1h-1v1h-1v1h-1v-5h1v-1h1v-1.001h-1v1h-1v1h-1.001v5.002h-2v-5.002h-1v-1h-1v-1H8.5v1h1v1h1v5.002h-1v-1h-1v-1h-1v-1.001h-1v-1h-1v-2h-1V7.5h1v-2h1v-1h1v-1h1v-1h2.001v-1h4.001v1h2v1h1.001v1h1v1h1v2.001z"></svg:path>`,
})
export class PixelLifeHackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
