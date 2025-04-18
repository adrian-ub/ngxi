import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtaIcon],svg[arcticons-mta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.952 9.828C18.46 3.53 29.575 4.177 36.3 11.305c6.725 7.127 6.725 18.263 0 25.39c-6.725 7.128-17.84 7.776-25.348 1.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.656 35.562V12.438l5.782 22.16l5.78-20.233v19.27M24 32.672V15.328m-3.469-.578l6.938 1.156m1.229 10.658l4.599-.25m-5.828 5.78l3.468-15.61l3.47 14.453"></svg:path>`,
})
export class ArcticonsMtaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
