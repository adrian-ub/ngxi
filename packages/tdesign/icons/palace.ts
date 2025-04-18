import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalaceIcon],svg[tdesign-palace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v1.126c1.725.444 3 2.01 3 3.874h3v2h-1v1h4v2h-1v8h1v2H2v-2h1v-8H2v-2h4V9H5V7h3a4 4 0 0 1 3-3.874V2zM8 9v1h8V9zm6-2a2 2 0 1 0-4 0zm-9 5v8h3v-2a4 4 0 0 1 8 0v2h3v-8zm9 8v-2a2 2 0 1 0-4 0v2z"></svg:path>`,
})
export class TdesignPalaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
