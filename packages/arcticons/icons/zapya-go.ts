import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZapyaGoIcon],svg[arcticons-zapya-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.66 16.285a54.15 54.15 0 0 1 23.777-4.784s-6.814 9.762-7.54 15.32c0 0 13.822-2.368 21.603 0l-.677 2.561s-17.446-.628-29.817 7.153c-.725-6.476 3.044-17.35 3.044-17.35a49.4 49.4 0 0 0-11.55 1.45Z"></svg:path>`,
})
export class ArcticonsZapyaGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
