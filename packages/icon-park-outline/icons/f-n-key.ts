import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFNKeyIcon],svg[icon-park-outline-f-n-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M26 17v15m0-9c0-2.379 1.6-4 4-4s4 1.527 4 4v9"></svg:path><svg:path stroke-linejoin="round" d="M21 16h-7v16m0-8h7"></svg:path></svg:g>`,
})
export class IconParkOutlineFNKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
