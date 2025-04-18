import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayDemoFilledIcon],svg[tdesign-play-demo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v2h1v14h6.586l-4 4L7 23.414l5-5l5 5L18.414 22l-4-4H21V4h1zm-7.333 8L10 13.5v-7z"></svg:path>`,
})
export class TdesignPlayDemoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
