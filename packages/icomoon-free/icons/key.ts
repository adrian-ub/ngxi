import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeKeyIcon],svg[icomoon-free-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a5 5 0 0 0-4.916 5.916L0 12v3a1 1 0 0 0 1 1h1v-1h2v-2h2v-2h2l1.298-1.298A5 5 0 1 0 11 0m1.498 5.002a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001"></svg:path>`,
})
export class IcomoonFreeKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
