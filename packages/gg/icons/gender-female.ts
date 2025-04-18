import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGenderFemaleIcon],svg[gg-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a5 5 0 0 0-1 9.9V15H8v2h3v4h2v-4h3v-2h-3v-2.1A5.002 5.002 0 0 0 12 3M9 8a3 3 0 1 0 6 0a3 3 0 0 0-6 0" clip-rule="evenodd"></svg:path>`,
})
export class GgGenderFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
