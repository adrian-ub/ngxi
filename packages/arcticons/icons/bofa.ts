import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBofaIcon],svg[arcticons-bofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.541 31.494L36.98 20.271M24.061 35.258L43.5 24.035m-39-.07l6.48-3.741m.04 7.505l6.48-3.741m6.439-11.246l6.52 3.764m-13-.023l6.521 3.764"></svg:path>`,
})
export class ArcticonsBofaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
