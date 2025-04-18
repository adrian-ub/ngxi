import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsVolume2Icon],svg[humbleicons-volume-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M6 9H3v6h3l5 4V5z"></svg:path><svg:path stroke-linecap="round" d="M18.5 5.5a9.19 9.19 0 0 1 0 13M15 8a5.657 5.657 0 0 1 0 8"></svg:path></svg:g>`,
})
export class HumbleiconsVolume2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
