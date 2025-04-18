import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBirdFillIcon],svg[ph-bird-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.44 73.34l-23.23-15.48A60 60 0 0 0 156 16h-.29C122.79 16.16 96 43.47 96 76.89v19.74L11.63 197.88l-.1.12A16 16 0 0 0 24 224h88a104.11 104.11 0 0 0 104-104v-19.72l20.44-13.62a8 8 0 0 0 0-13.32m-110.29 59.78l-60 72a8 8 0 1 1-12.29-10.24l60-72a8 8 0 1 1 12.29 10.24M164 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhBirdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
