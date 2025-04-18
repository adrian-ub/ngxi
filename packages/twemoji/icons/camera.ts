import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCameraIcon],svg[twemoji-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M4 5s0-1 1-1h6s1 0 1 1v2H4z"></svg:path><svg:path fill="#31373D" d="M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4z"></svg:path><svg:circle cx="21" cy="19" r="10" fill="#CCD6DD"></svg:circle><svg:circle cx="21" cy="19" r="8" fill="#31373D"></svg:circle><svg:circle cx="21" cy="19" r="5" fill="#3B88C3"></svg:circle><svg:circle cx="32.5" cy="9.5" r="1.5" fill="#FFF"></svg:circle><svg:path fill="#F5F8FA" d="M12 9.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 1 1 0-3h5A1.5 1.5 0 0 1 12 9.5"></svg:path>`,
})
export class TwemojiCameraIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
