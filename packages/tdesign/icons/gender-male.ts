import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGenderMaleIcon],svg[tdesign-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3H21v7.5h-2V6.414l-3.394 3.394a7 7 0 1 1-1.414-1.414L17.586 5H13.5zM10 9a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class TdesignGenderMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
