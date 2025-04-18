import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPiccomaIcon],svg[arcticons-piccoma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.265 6.515L4.5 17.977l8.807 19.806l17.381-3.465l-.361 7.167l4.779-7.937l3.978-.773l4.416-15.95z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.94 31.91c10.854-4.058 12.213-13.12 12.674-17.385m-9.106 2.389l1.638 3.932m-9.686.075l3.568.202l-2.467 2.792"></svg:path>`,
})
export class ArcticonsPiccomaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
