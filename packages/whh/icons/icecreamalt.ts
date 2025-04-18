import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhIcecreamaltIcon],svg[whh-icecreamalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 704H64q-27 0-45.5-19T0 640V256Q0 150 75 75T256 0t181 75t75 181v384q0 27-19 45.5T448 704M320 960q0 26-19 45t-45.5 19t-45-19t-18.5-45V768h128z"></svg:path>`,
})
export class WhhIcecreamaltIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
