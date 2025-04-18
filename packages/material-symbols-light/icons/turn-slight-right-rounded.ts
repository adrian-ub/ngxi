import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSlightRightRoundedIcon],svg[material-symbols-light-turn-slight-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19.77q-.213 0-.357-.145T9.5 19.27v-6.517q0-.332.13-.632t.349-.518L15.6 6h-2.48q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143h3.362q.343 0 .575.232t.233.576v3.361q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356V6.69l-5.616 5.596q-.096.096-.134.202t-.039.22v6.562q0 .213-.144.357t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightTurnSlightRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
