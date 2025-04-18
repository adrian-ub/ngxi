import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNatureIcon],svg[zmdi-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 304v83h128v42H0v-42h128v-84q-53-9-88.5-50.5T4 156Q4 94 47.5 50T153 6t105.5 44T302 156q0 57-37.5 99T171 304"></svg:path>`,
})
export class ZmdiNatureIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}
