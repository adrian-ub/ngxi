import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTilemenuIcon],svg[ls-tilemenu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 204h190V14H0zm238 0h190V14H238zm237 0h191V14H475zM0 442h190V252H0zm238 0h190V252H238zm237 0h191V252H475zM0 680h190V489H0zm238 0h190V489H238zm237 0h191V489H475z"></svg:path>`,
})
export class LsTilemenuIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
