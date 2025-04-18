import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalaceFilledIcon],svg[tdesign-palace-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.126V2h-2v1.126C9.275 3.57 8 5.136 8 7H5v2h1v1h12V9h1V7h-3a4 4 0 0 0-3-3.874M2 12h20v2h-1v6h1v2h-6v-2a4 4 0 0 0-8 0v2H2v-2h1v-6H2z"></svg:path><svg:path fill="currentColor" d="M10 20a2 2 0 1 1 4 0v2h-4z"></svg:path>`,
})
export class TdesignPalaceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
