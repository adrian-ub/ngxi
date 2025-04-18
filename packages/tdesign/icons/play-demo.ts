import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayDemoIcon],svg[tdesign-play-demo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2h-1v14h-6.586l4 4L17 23.414l-5-5l-5 5L5.586 22l4-4H3V4H2zm3 2v12h14V4zm5 2.5l4.667 3.5L10 13.5z"></svg:path>`,
})
export class TdesignPlayDemoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
