import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiGirlIcon],svg[flat-ui-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#FFF55B" opacity=".6"></svg:circle><svg:path fill="#D35400" fill-rule="evenodd" d="M50 11c-16.016 0-29 13.984-29 30v32a5 5 0 0 0 5 5h48a5 5 0 0 0 5-5V41c0-16.016-12.984-30-29-30" clip-rule="evenodd"></svg:path><svg:circle cx="24" cy="47" r="7" fill="#D48A6D" fill-rule="evenodd" clip-rule="evenodd"></svg:circle><svg:circle cx="76" cy="47" r="7" fill="#D48A6D" fill-rule="evenodd" clip-rule="evenodd"></svg:circle><svg:path fill="#DF9274" fill-rule="evenodd" d="M50 17c14.359 0 26 11.641 26 26v15c0 14.359-11.641 26-26 26S24 72.359 24 58V43c0-14.359 11.641-26 26-26" clip-rule="evenodd"></svg:path><svg:path fill="#D35400" fill-rule="evenodd" d="M50 10c-16.016 0-29 13.984-29 30c18.616 0 39-14 39-14s11.562 14 19 14c0-16.016-12.984-30-29-30" clip-rule="evenodd"></svg:path><svg:path fill="#3498DB" d="M40 52.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5"></svg:path><svg:path fill="#fff" d="M40 45c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-3a6 6 0 0 0 0 12a6 6 0 0 0 0-12"></svg:path><svg:path fill="#3498DB" d="M60 52.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5"></svg:path><svg:path fill="#fff" d="M60 45c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-3a6 6 0 0 0 0 12a6 6 0 0 0 0-12"></svg:path><svg:path fill="#fff" stroke="#B87054" stroke-miterlimit="10" stroke-width="2" d="M59 65c0 5.523-4.029 10-9 10s-9-4.477-9-10z"></svg:path>`,
})
export class FlatUiGirlIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
