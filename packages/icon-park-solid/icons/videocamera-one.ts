import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideocameraOneIcon],svg[icon-park-solid-videocamera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="31" height="20" x="4" y="21" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 27h9v8h-9z"></svg:path><svg:circle cx="27" cy="13" r="5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13" cy="13" r="5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m35 35l9 4V23l-9 4"></svg:path></svg:g>`,
})
export class IconParkSolidVideocameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
