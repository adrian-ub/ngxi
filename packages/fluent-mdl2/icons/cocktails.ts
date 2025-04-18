import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CocktailsIcon],svg[fluent-mdl2-cocktails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 64q0 26-19 45l-749 750v1061h320q26 0 45 19t19 45t-19 45t-45 19H576q-26 0-45-19t-19-45t19-45t45-19h320V859L147 109q-19-19-19-45t19-45t45-19h1536q26 0 45 19t19 45M346 128l614 614l613-614z"></svg:path>`,
})
export class FluentMdl2CocktailsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
