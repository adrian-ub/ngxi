import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiWhitemediumsquareIcon],svg[fxemoji-whitemediumsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D9DDE8" d="M465.833 70.79c0-13.543-11.081-24.624-24.624-24.624H67.995c-12.189 0-22.161 9.973-22.161 22.161v375.677c0 12.189 9.973 22.161 22.161 22.161H441.21c13.543 0 24.624-11.081 24.624-24.624z"></svg:path>`,
})
export class FxemojiWhitemediumsquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
