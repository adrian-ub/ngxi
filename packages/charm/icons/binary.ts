import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBinaryIcon],svg[charm-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 1.75h3v4.5h-3zm6.5 4.5h3m-3-4.5h1.5v4m-1.5 4h3v4.5h-3zm-6.5 4.5h3m-3-4.5h1.5v4"></svg:path>`,
})
export class CharmBinaryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
