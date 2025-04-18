import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosLexicalIconIcon],svg[logos-lexical-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#76B6FF" d="M43.39 75.932h47.729v21.695H43.39z"></svg:path><svg:path d="M101.966 75.932h47.729v21.695h-47.729z"></svg:path><svg:path fill="#76B6FF" d="M160.542 75.932h19.526v21.695h-19.526zM43.39 110.644h78.102v21.695H43.39zm88.949 0h47.729v21.695h-47.729z"></svg:path><svg:path d="M43.39 145.356h47.729v21.695H43.39z"></svg:path><svg:path fill="#76B6FF" d="M101.966 145.356h47.729v21.695h-47.729z"></svg:path><svg:path d="M160.542 145.356h19.526v21.695h-19.526z"></svg:path><svg:path d="M236.475 0v21.695H212.61v199.593h23.865v21.695H169.22v-21.695h21.695V21.695H169.22V0zm-56.407 32.542v21.695H21.695v134.509h158.373v21.695H0V32.542zm75.932 0v177.899h-32.542v-21.695h10.847V54.237h-10.847V32.542z"></svg:path>`,
})
export class LogosLexicalIconIcon {
  readonly viewBox = input("0 0 256 243")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
