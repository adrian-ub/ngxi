import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalBoldIcon],svg[mdi-swap-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h-3v6H6V8H3l5.5-6zm1.5 14l5.5-6h-3v-6h-5v6h-3z"></svg:path>`,
})
export class MdiSwapVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
