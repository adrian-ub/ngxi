import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleThinIcon],svg[ph-drop-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.23A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhDropSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
