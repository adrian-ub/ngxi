import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsAidIcon],svg[humbleicons-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 8h8m-4 4v2m0 0v2m0-2h-2m2 0h2"></svg:path>`,
})
export class HumbleiconsAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
