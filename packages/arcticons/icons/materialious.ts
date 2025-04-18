import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaterialiousIcon],svg[arcticons-materialious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="17.271" cy="9.687" rx="1.359" ry="1.385"></svg:ellipse><svg:path d="m21.678 29.34l3.058 10.36L43.5 20.65l-25.802-7.084l.938 3.72"></svg:path><svg:path d="m11.568 39.674l18.777-19.19L4.5 13.424z"></svg:path></svg:g>`,
})
export class ArcticonsMaterialiousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
