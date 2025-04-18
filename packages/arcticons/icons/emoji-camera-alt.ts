import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCameraAltIcon],svg[arcticons-emoji-camera-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.926 14.94c-1.34 0-2.426 1.059-2.426 2.366V35.25c0 1.307 1.086 2.367 2.426 2.367h32.148c1.34 0 2.426-1.06 2.426-2.367V17.306c0-1.307-1.086-2.367-2.426-2.367z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.62 14.94v-3.77a.8.8 0 0 0-.81-.789h-5.923a.8.8 0 0 0-.809.789v3.768m19.118 7.946H42.5m-37 .02l9.84-.02m-.79 3.395c0 4.268 3.454 7.728 7.716 7.728s7.716-3.46 7.716-7.728s-3.455-7.728-7.716-7.728s-7.717 3.46-7.717 7.728"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.407 26.279c0 5.152 7.717 5.152 7.717 0s-7.717-5.152-7.717 0"></svg:path>`,
})
export class ArcticonsEmojiCameraAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
