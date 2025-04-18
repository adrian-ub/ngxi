import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationCameraIcon],svg[foundation-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50.041" cy="53.256" r="9.513" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M86.778 24.2v-.037H70.111v-2.792a3.72 3.72 0 0 0-3.722-3.722H33.611a3.72 3.72 0 0 0-3.723 3.722v2.792H13.221v.037A3.72 3.72 0 0 0 9.5 27.922v50.669a3.72 3.72 0 0 0 3.721 3.722v.037h73.557v-.037a3.723 3.723 0 0 0 3.722-3.722V27.922a3.72 3.72 0 0 0-3.722-3.722M50.247 72.542c-10.651 0-19.286-8.634-19.286-19.286c0-10.651 8.635-19.286 19.286-19.286s19.287 8.635 19.287 19.286c.001 10.652-8.635 19.286-19.287 19.286m35.266-33.397h-14.74v-9.957h14.739z"></svg:path>`,
})
export class FoundationCameraIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
