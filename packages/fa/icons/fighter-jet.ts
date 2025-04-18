import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFighterJetIcon],svg[fa-fighter-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 704q-1 32-288 96l-352 32l-224 64h-64l-293 352h69q26 0 45 4.5t19 11.5t-19 11.5t-45 4.5H448v-32h64V832H352l-192 224H64l-32-32V832h32v-32h128v-8L0 768V640l192-24v-8H64v-32H32V384l32-32h96l192 224h160V160h-64v-32h320q26 0 45 4.5t19 11.5t-19 11.5t-45 4.5h-69l293 352h64l224 64l352 32q128 28 200 52t80 34z"></svg:path>`,
})
export class FaFighterJetIcon {
  readonly viewBox = input("0 0 1920 1280")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
