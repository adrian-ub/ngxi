import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMahindraForYouIcon],svg[arcticons-mahindra-for-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.723 38.588l3.453.12L24 32.061v-5.416L5.5 9.292zm20.554 0l-3.453.12L24 32.061v-5.416L42.5 9.292z"></svg:path>`,
})
export class ArcticonsMahindraForYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
