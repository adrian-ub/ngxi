import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psSlashdotIcon],svg[ps-slashdot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 459L209 2h88L93 459zm374-69q0-31-21.5-52T306 317q-31 0-52 21t-21 52q0 30 21 51t52 21q30 0 51.5-21t21.5-51"></svg:path>`,
})
export class PsSlashdotIcon {
  readonly viewBox = input("0 0 384 488")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
