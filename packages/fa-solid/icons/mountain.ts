import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidMountainIcon],svg[fa-solid-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32 32 0 0 0-1.17 32.64A32 32 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.98 31.98 0 0 0-1.17-32.63M320 91.18L405.39 224H320l-64 64l-38.06-38.06z"></svg:path>`,
})
export class FaSolidMountainIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
