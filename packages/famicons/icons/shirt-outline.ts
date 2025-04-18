import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsShirtOutlineIcon],svg[famicons-shirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.56 48s-22.78 8-58.56 8s-58.56-8-58.56-8a32 32 0 0 0-10.57 1.8L32 104l16.63 88l48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104L325.13 49.8a32 32 0 0 0-10.57-1.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M333.31 52.66a80 80 0 0 1-154.62 0"></svg:path>`,
})
export class FamiconsShirtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
