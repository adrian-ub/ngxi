import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmilingFaceWithSmilingEyesIcon],svg[openmoji-smiling-face-with-smiling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#fcea2b"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:circle cx="36" cy="36" r="23" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M45.815 45.227a15.43 15.43 0 0 1-19.63 0"></svg:path><svg:path stroke-miterlimit="10" d="M31.694 33.404a4.726 4.726 0 0 0-8.638 0m25.888 0a4.726 4.726 0 0 0-8.638 0"></svg:path></svg:g>`,
})
export class OpenmojiSmilingFaceWithSmilingEyesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
