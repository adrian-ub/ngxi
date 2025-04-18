import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKissingFaceWithSmilingEyesIcon],svg[openmoji-kissing-face-with-smiling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linejoin="round" d="M36.415 41.092s10.525 3.196 0 5.564c0 0 10.458 2.988 0 4.913"></svg:path><svg:circle cx="36" cy="36" r="23" stroke-linejoin="round"></svg:circle><svg:path d="M31.694 32.404a4.726 4.726 0 0 0-8.638 0m25.888 0a4.726 4.726 0 0 0-8.638 0"></svg:path></svg:g>`,
})
export class OpenmojiKissingFaceWithSmilingEyesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
