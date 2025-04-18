import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPuppeteerIcon],svg[catppuccin-puppeteer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="m12 2l.5 6M4 2l-.5 6"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M3 10h10M4 8h8c.554 0 1 .446 1 1v5.5c0 .554-.446 1-1 1H4c-.554 0-1-.446-1-1V9c0-.554.446-1 1-1"></svg:path><svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3L3 4.5V5l1.5.5L8 4l3.5 1.5L13 5v-.5L9.5 3L13 1.5V1L11.5.5L8 2L4.5.5L3 1v.5Z"></svg:path>`,
})
export class CatppuccinPuppeteerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
