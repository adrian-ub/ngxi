import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsThumbsUpIcon],svg[meteor-icons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4l4-9a3 3 0 0 1 3 3v4h6a2 2.3 0 0 1 2 3l-2 8a3 3 0 0 1-3 2h-6zV11"></svg:path>`,
})
export class MeteorIconsThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
