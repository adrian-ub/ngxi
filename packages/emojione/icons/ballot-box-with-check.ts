import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBallotBoxWithCheckIcon],svg[emojione-ballot-box-with-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#83bf4f" d="M58.4 0L23.6 38.3l-10.1-7.7H7.9l15.7 25.5L64 0z"></svg:path><svg:path fill="#3e4347" d="M53.9 56.1c0 .6-.5 1.1-1.1 1.1H7.9c-.6 0-1.1-.5-1.1-1.1V11.2c0-.6.5-1.1 1.1-1.1h30.7l6.1-6.7H2.2C1 3.4 0 4.4 0 5.6v56.1C0 63 1 64 2.2 64h56.1c1.2 0 2.2-1 2.2-2.2V18.1l-6.7 9.4c.1 0 .1 28.6.1 28.6"></svg:path>`,
})
export class EmojioneBallotBoxWithCheckIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
