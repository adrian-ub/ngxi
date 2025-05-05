import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoFilledIcon],svg[tdesign-video-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M22 2H2v20h20zm-5.25 10l-8 4.5v-9z"></svg:path>`,
})
export class TdesignVideoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
