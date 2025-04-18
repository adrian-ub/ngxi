import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiConfectionery11Icon],svg[maki-confectionery-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.24 2.513a.746.746 0 0 0-.745-.746a.746.746 0 1 0-1.493 0v1.746A2.489 2.489 0 0 0 3.512 7H1.747a.746.746 0 0 0 0 1.492a.746.746 0 0 0 .747.746a.746.746 0 0 0 1.492 0v-1.76a2.489 2.489 0 0 0 3.506-3.473h1.748a.746.746 0 0 0 0-1.492zM5.5 7.284a1.782 1.782 0 0 1-.72-3.413a.816.816 0 0 1 .244.177a1.648 1.648 0 0 1 .301 1.076v.737a1.972 1.972 0 0 0 .388 1.322a1.155 1.155 0 0 0 .096.07a1.776 1.776 0 0 1-.309.031zm.72-.155a.816.816 0 0 1-.244-.177a1.648 1.648 0 0 1-.301-1.076v-.737a1.972 1.972 0 0 0-.388-1.322a1.155 1.155 0 0 0-.096-.07A1.78 1.78 0 0 1 6.22 7.13z" fill="currentColor"></svg:path>`,
})
export class MakiConfectionery11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
