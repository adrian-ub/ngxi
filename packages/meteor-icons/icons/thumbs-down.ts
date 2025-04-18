import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsThumbsDownIcon],svg[meteor-icons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15v4a3 3 0 0 0 3 3l4-9V3l-4-1H7a3 3 0 0 0-3 2l-2 8a2 2.3 0 0 0 2 3zm7-12h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4"></svg:path>`,
})
export class MeteorIconsThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
