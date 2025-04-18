import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonFillIcon],svg[ph-person-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 36a28 28 0 1 1 28 28a28 28 0 0 1-28-28m115.42 104.78l-45.25-51.3a28 28 0 0 0-21-9.48h-42.34a28 28 0 0 0-21 9.48l-45.25 51.3a16 16 0 0 0 22.56 22.69L89 142.7l-19.7 74.88a16 16 0 0 0 29.08 13.35L128 180l29.58 51a16 16 0 0 0 29.08-13.35L167 142.7l25.9 20.77a16 16 0 0 0 22.56-22.69Z"></svg:path>`,
})
export class PhPersonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
