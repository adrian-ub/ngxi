import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSouthAfricaIcon],svg[twemoji-flag-south-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DE3830" d="M32 5H6.5L19 13.5h17V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#002395" d="M6.5 31H32a4 4 0 0 0 4-4v-4.5H19z"></svg:path><svg:path fill="#141414" d="M0 11v14l10.5-7z"></svg:path><svg:path fill="#FFB611" d="M0 9v2l10.5 7L0 25v2l13.5-9z"></svg:path><svg:path fill="#007A4D" d="M3.541 5.028A4 4 0 0 0 0 9l13.5 9L0 27a4 4 0 0 0 3.541 3.972L18.5 20.5H36v-5H18.5z"></svg:path><svg:path fill="#EEE" d="M6.5 5H4q-.233.001-.459.028L18.5 15.5H36v-2H19zM3.541 30.972q.226.027.459.028h2.5L19 22.5h17v-2H18.5z"></svg:path>`,
})
export class TwemojiFlagSouthAfricaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
