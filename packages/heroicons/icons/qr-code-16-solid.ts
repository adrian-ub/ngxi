import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsQrCode16SolidIcon],svg[heroicons-qr-code-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.75 4.25a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2H6a1.5 1.5 0 0 1 1.5 1.5V6A1.5 1.5 0 0 1 6 7.5H3.5A1.5 1.5 0 0 1 2 6zm1.5 0H6V6H3.5z" clip-rule="evenodd"></svg:path><svg:path d="M4.25 11.25a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path><svg:path fill-rule="evenodd" d="M2 10a1.5 1.5 0 0 1 1.5-1.5H6A1.5 1.5 0 0 1 7.5 10v2.5A1.5 1.5 0 0 1 6 14H3.5A1.5 1.5 0 0 1 2 12.5zm1.5 2.5V10H6v2.5z" clip-rule="evenodd"></svg:path><svg:path d="M11.25 4.25a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill-rule="evenodd" d="M10 2a1.5 1.5 0 0 0-1.5 1.5V6A1.5 1.5 0 0 0 10 7.5h2.5A1.5 1.5 0 0 0 14 6V3.5A1.5 1.5 0 0 0 12.5 2zm2.5 1.5H10V6h2.5z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 9.417a.917.917 0 1 1 1.833 0a.917.917 0 0 1-1.833 0m0 3.666a.917.917 0 1 1 1.833 0a.917.917 0 0 1-1.833 0M13.083 8.5a.917.917 0 1 0 0 1.833a.917.917 0 0 0 0-1.833m-.917 4.584a.917.917 0 1 1 1.833 0a.917.917 0 0 1-1.833 0m-.916-2.751a.917.917 0 1 0 0 1.833a.917.917 0 0 0 0-1.833"></svg:path></svg:g>`,
})
export class HeroiconsQrCode16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
