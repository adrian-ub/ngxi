import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHardhatIcon],svg[catppuccin-hardhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.741a.75.73 0 0 0 .75.73h13.5a.75.73 0 0 0 .75-.73v-1.459a.75.73 0 0 0-.75-.73H1.25a.75.73 0 0 0-.75.73Zm6-5.835V3.259a.75.73 0 0 1 .75-.73h1.5a.75.73 0 0 1 .75.73v3.647M2 10.553V8.365a4.5 4.376 0 0 1 4.5-4.377m3 0A4.5 4.376 0 0 1 14 8.365v2.188"></svg:path>`,
})
export class CatppuccinHardhatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
