import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStrikethroughIcon],svg[iconoir-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18m-4.714-9h-6.218a4.068 4.068 0 0 0-1.286 7.927L12 12m-6 9h7.932a4.068 4.068 0 0 0 3.58-6"></svg:path>`,
})
export class IconoirStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
