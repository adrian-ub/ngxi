import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAColorStoryIcon],svg[arcticons-a-color-story-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 23.943l8.206-19.811M24 23.943l19.811-8.206M24 23.943l19.811 8.206M24 23.943l8.206 19.811M24 23.943l-8.206 19.811M24 23.943L4.189 32.149M24 23.943L4.189 15.737M24 23.943L15.794 4.132"></svg:path><svg:circle cx="24" cy="24" r="10.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAColorStoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
