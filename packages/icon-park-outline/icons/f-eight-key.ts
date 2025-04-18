import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFEightKeyIcon],svg[icon-park-outline-f-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M30 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 16h-7v16m0-8h7"></svg:path></svg:g>`,
})
export class IconParkOutlineFEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
