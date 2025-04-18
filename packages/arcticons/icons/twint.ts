import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwintIcon],svg[arcticons-twint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 23.958L32.804 38.054L20.018 21.202h0a7.076 7.076 0 1 1 11.422 0h0L18.652 38.054L5.865 21.202h0a7.08 7.08 0 0 1 7.62-10.995"></svg:path>`,
})
export class ArcticonsTwintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
