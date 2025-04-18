import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavascriptIcon],svg[catppuccin-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 11a1.5 1.5 0 0 0 3 0V7.5m5 1.25c0-.69-.537-1.25-1.2-1.25h-.6c-.663 0-1.2.56-1.2 1.25S10.037 10 10.7 10h.6c.663 0 1.2.56 1.2 1.25s-.537 1.25-1.2 1.25h-.6c-.663 0-1.2-.56-1.2-1.25"></svg:path><svg:path d="M4 1.5h8c1.385 0 2.5 1.115 2.5 2.5v8c0 1.385-1.115 2.5-2.5 2.5H4A2.495 2.495 0 0 1 1.5 12V4c0-1.385 1.115-2.5 2.5-2.5"></svg:path></svg:g>`,
})
export class CatppuccinJavascriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
