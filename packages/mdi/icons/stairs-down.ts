import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStairsDownIcon],svg[mdi-stairs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h7v3h-4v4h-4v4h-4v4H3v-3h4v-4h4v-4h4zM4.83 8.34l5.51-5.51l1.83 1.83l-5.51 5.51L8.5 12H3V6.5z"></svg:path>`,
})
export class MdiStairsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
