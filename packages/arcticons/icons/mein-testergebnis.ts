import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeinTestergebnisIcon],svg[arcticons-mein-testergebnis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.338 21.38c1.341 10.928-5.79 21.103-16.52 23.57C18.09 47.417 7.23 41.38 3.664 30.963C.097 20.547 4.977 9.12 14.967 4.493s21.862-.957 27.499 8.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.436 17.595l-17.45 17.797s-.918.864-2.096.862s-1.947-.862-1.947-.862l-6.472-6.455"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.466 12.993L27.19 28.283s-.894 1.031-2.064 1.05s-2.036-.902-2.036-.902l-6.775-6.806"></svg:path>`,
})
export class ArcticonsMeinTestergebnisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
