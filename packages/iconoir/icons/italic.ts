import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirItalicIcon],svg[iconoir-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5h3m3 0h-3m0 0l-4 14m0 0H7m3 0h3"></svg:path>`,
})
export class IconoirItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
