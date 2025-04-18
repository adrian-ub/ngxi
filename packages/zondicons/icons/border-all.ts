import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBorderAllIcon],svg[zondicons-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v6h6v-6zm0-2h6V3h-6zm-2 2H3v6h6zm0-2V3H3v6zm-8 9V1h18v18H1z"></svg:path>`,
})
export class ZondiconsBorderAllIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
