import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiUppointingredtriangleIcon],svg[fxemoji-uppointingredtriangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF473E" d="M109.923 346.506L242.175 147.15c6.562-9.892 21.088-9.892 27.65 0l132.252 199.356c7.316 11.028-.591 25.762-13.825 25.762H123.748c-13.234.001-21.141-14.734-13.825-25.762"></svg:path>`,
})
export class FxemojiUppointingredtriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
