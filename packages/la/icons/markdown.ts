import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMarkdownIcon],svg[la-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.875 6C1.32 6 0 7.254 0 8.813v14.374C0 24.747 1.32 26 2.875 26h26.25C30.68 26 32 24.746 32 23.187V8.813C32 7.255 30.68 6 29.125 6zm0 2h26.25c.516 0 .875.383.875.813v14.374c0 .43-.36.813-.875.813H2.875C2.359 24 2 23.617 2 23.187V8.813c0-.43.36-.812.875-.812zM5 11v10h3v-6.656l3 3.969l3-3.97V21h3V11h-3l-3 4l-3-4zm17 0v5h-3l4.5 5l4.5-5h-3v-5z"></svg:path>`,
})
export class LaMarkdownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
