import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsVolume1Icon],svg[humbleicons-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M8 9H5v6h3l5 4V5z"></svg:path><svg:path stroke-linecap="round" d="M17 8a5.657 5.657 0 0 1 0 8"></svg:path></svg:g>`,
})
export class HumbleiconsVolume1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
