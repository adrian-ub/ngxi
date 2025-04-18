import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMusicFillIcon],svg[mage-music-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.82 6.49v1a3 3 0 0 1-.32 1.34a3 3 0 0 1-.87 1.07a3.1 3.1 0 0 1-1.25.57q-.301.06-.61.06q-.391 0-.77-.09l-4.24-1.2v8.22a4.79 4.79 0 1 1-1.5-3.47V2.46a.6.6 0 0 1 0-.2v-.08a.76.76 0 0 1 .54-.44h.44l6.3 1.79a3 3 0 0 1 2.22 2.93z"></svg:path>`,
})
export class MageMusicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
