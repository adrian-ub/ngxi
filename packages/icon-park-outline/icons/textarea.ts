import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextareaIcon],svg[icon-park-outline-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4c7 0 8 6 8 8v24c0 2-1 8-8 8M32 4c-6 0-8 6-8 8v24c0 2 1 8 8 8M17 24h14"></svg:path>`,
})
export class IconParkOutlineTextareaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
