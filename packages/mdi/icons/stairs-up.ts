import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStairsUpIcon],svg[mdi-stairs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h7v3h-4v4h-4v4h-4v4H3v-3h4v-4h4v-4h4zm-4.83.66l-5.51 5.51l-1.83-1.83l5.51-5.51L6.5 3H12v5.5z"></svg:path>`,
})
export class MdiStairsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
