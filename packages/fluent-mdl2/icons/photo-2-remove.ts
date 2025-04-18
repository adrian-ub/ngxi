import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Photo2RemoveIcon],svg[fluent-mdl2-photo-2-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 576q0-26 19-45t45-19t45 19t19 45t-19 45t-45 19t-45-19t-19-45m410 1024l227 227l-90 90l-227-227l-227 227l-90-90l227-227l-227-227l90-90l227 227l227-227l90 90zm-361 0l-65 64H0V256h1792v1008l-64 65l-64-65V384H128v421l192-191l512 512l256-256l323 322l-91 91l-232-233l-166 166l321 320h149zm-396-64L320 794L128 987v549z"></svg:path>`,
})
export class FluentMdl2Photo2RemoveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
