import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRamenDiningOutlineIcon],svg[material-symbols-ramen-dining-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20h4v-1.1l1.25-.5q1.625-.65 2.763-1.812T19.65 14H4.35q.5 1.425 1.625 2.588T8.75 18.4l1.25.5zm-2 2v-1.75Q5.325 19.2 3.663 17T2 12h2V4l18-2v1.5L10.5 4.8v1.7H22V8H10.5v4H22q0 2.8-1.662 5T16 20.25V22zM8 6.5h1V4.95l-1 .125zm-2.5 0h1V5.25l-1 .1zM8 12h1V8H8zm-2.5 0h1V8h-1zm6.5 2"></svg:path>`,
})
export class MaterialSymbolsRamenDiningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
