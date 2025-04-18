import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSignalStrengthIcon],svg[icon-park-outline-signal-strength-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284s-20.474-7.81-28.284 0s-7.81 20.474 0 28.284m22.627-5.657c4.687-4.686 4.687-12.284 0-16.97c-4.686-4.687-12.284-4.687-16.97 0c-4.687 4.686-4.687 12.284 0 16.97"></svg:path><svg:path d="M28 24a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 0v16m0 0h4m-4 0h-4"></svg:path></svg:g>`,
})
export class IconParkOutlineSignalStrengthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
