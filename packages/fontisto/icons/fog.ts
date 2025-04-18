import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFogIcon],svg[fontisto-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.506 24a1.019 1.019 0 1 1 0-2.038h6.873a1.019 1.019 0 1 1 0 2.038zm3.263-5.491a1.019 1.019 0 1 1 0-2.038h9.728a1.019 1.019 0 1 1 0 2.038zm-2.04-5.49a1.019 1.019 0 1 1 0-2.038h13.399a1.019 1.019 0 1 1 0 2.038zM3.058 7.525a1.019 1.019 0 1 1 0-2.038h15.438a1.019 1.019 0 1 1 0 2.038zM1.019 2.039a1.019 1.019 0 1 1 0-2.038h23.187a1.019 1.019 0 1 1 0 2.038z"></svg:path>`,
})
export class FontistoFogIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
