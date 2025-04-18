import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCaixaIcon],svg[arcticons-caixa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 37.361l12.333-12.333H29.14L16.806 37.36zm23.64-12.333l6.166 12.333H24l-2.35-4.701m-2.789-9.688L12.695 10.64H24l6.167 12.333"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.398 15.436l4.796-4.797H42.5L30.167 22.972H18.86"></svg:path>`,
})
export class ArcticonsCaixaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
