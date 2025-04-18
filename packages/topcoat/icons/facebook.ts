import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatFacebookIcon],svg[topcoat-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.08 6.51c.29-.01 1.109-.03 1.42-.01c1.12 0 2.84-.1 4 0v5h-4c-1.46 0-2 .35-2 2v4h5v5h-5v14h-5v-14h-4v-5h4l-.061-4.42c0-3.061.621-4.92 3.15-6.02c.651-.28 1.641-.53 2.491-.55M.5 1.5v39h39v-39z"></svg:path>`,
})
export class TopcoatFacebookIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
