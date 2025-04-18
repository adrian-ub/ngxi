import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGenderFemaleIcon],svg[tdesign-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.006A5 5 0 0 1 12.252 14h-.504A5 5 0 0 1 12 4.006m1 11.93a7.002 7.002 0 0 0-1-13.93a7 7 0 0 0-1 13.93V17H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class TdesignGenderFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
