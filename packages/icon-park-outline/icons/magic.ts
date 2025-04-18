import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMagicIcon],svg[icon-park-outline-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20.1 8.1l4.243 4.243M30 4v6zm9.9 4.1l-4.243 4.243zM44 18h-6zm-4.1 9.9l-4.243-4.243zM30 32v-6zm-9.9-4.1l4.243-4.243zM16 18h6zm13.586.414L5.544 42.456"></svg:path>`,
})
export class IconParkOutlineMagicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
