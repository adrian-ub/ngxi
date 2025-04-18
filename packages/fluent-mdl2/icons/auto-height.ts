import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AutoHeightIcon],svg[fluent-mdl2-auto-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 102l365 365l-90 90l-211-210v549H384V347L173 557l-90-90zm275 1389l90 90l-365 365l-365-365l90-90l211 210v-549h128v549zM2048 256v1536H896v-128h1024V384H896V256zm-384 256l-197 320h340l-626 704H927l165-384H856l320-640zm-425 448l196-320h-179l-192 384h222l-163 384l398-448z"></svg:path>`,
})
export class FluentMdl2AutoHeightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
