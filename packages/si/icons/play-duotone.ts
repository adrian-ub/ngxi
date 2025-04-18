import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPlayDuotoneIcon],svg[si-play-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="m5 3l16 9l-16 9z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"></svg:path></svg:g>`,
})
export class SiPlayDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
