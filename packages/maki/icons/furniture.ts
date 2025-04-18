import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFurnitureIcon],svg[maki-furniture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.691 10.142V8.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.641a3.99 3.99 0 0 0-2.957 3.272a.507.507 0 0 0 .5.586h6.922a.507.507 0 0 0 .5-.586a3.99 3.99 0 0 0-2.965-3.271m4.639-3.863l-2.5-5A.5.5 0 0 0 10.383 1H4.999a.5.5 0 0 0-.446.276l-2.5 5A.5.5 0 0 0 2.497 7h8.194v1.5a.5.5 0 0 0 1 0V7h1.194a.5.5 0 0 0 .445-.721"></svg:path>`,
})
export class MakiFurnitureIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
