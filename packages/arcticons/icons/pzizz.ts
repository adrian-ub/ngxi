import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPzizzIcon],svg[arcticons-pzizz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 32.535c12.602.088 19.573-8.015 19.5-17.07h-7.686C34.785 17.934 33.092 23.86 24 24c-9.092-.14-10.785-6.065-11.814-8.536H4.501C4.427 24.52 11.399 32.623 24 32.535"></svg:path>`,
})
export class ArcticonsPzizzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
