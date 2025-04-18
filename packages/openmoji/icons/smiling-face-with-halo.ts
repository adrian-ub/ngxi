import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmilingFaceWithHaloIcon],svg[openmoji-smiling-face-with-halo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M36 60a24 24 0 0 0 18.157-39.695q-.13-.152-.265-.301A24 24 0 1 0 36 60"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M45.815 45.227a15.43 15.43 0 0 1-19.63 0m21.581-28.994a23.03 23.03 0 0 0-23.37-.096"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.638 22.147a23 23 0 1 0 36.625-.13"></svg:path><svg:ellipse cx="36" cy="14.8" stroke-miterlimit="10" rx="25" ry="5.25"></svg:ellipse><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M31.694 33.404a4.726 4.726 0 0 0-8.638 0m25.888 0a4.726 4.726 0 0 0-8.638 0"></svg:path></svg:g><svg:ellipse cx="36" cy="14.8" fill="none" stroke="#61b2e4" stroke-miterlimit="10" stroke-width="2.1" rx="25" ry="5.25"></svg:ellipse>`,
})
export class OpenmojiSmilingFaceWithHaloIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
