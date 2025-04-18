import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCrutchIcon],svg[streamline-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.147 6.832h3.991m-3.104 0V9.68a1.11 1.11 0 0 0 1.11 1.109v0c.612 0 1.108-.497 1.108-1.11V6.833M4.13 10.792v2.138m-.653.016h1.33M8.553 4.65a1.886 1.886 0 1 0 0-3.771a1.886 1.886 0 0 0 0 3.772Z"></svg:path><svg:path d="M6.667 5.243a3.3 3.3 0 0 1 5.186 2.709v1.414H10.44l-.472 3.772h-2.83l-.393-3.146"></svg:path></svg:g>`,
})
export class StreamlineCrutchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
