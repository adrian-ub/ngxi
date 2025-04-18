import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEditMovieIcon],svg[icon-park-edit-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M43 9V17V31V39H34V31H43V17H34V9H43Z"></svg:path><svg:path fill="#2F88FF" d="M5 17V9H14V17H5V31H14V39H5V31V17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 17V9H34M43 17V31M43 17H34M5 17V9H14M5 17V31M5 17H14M5 31V39H14M5 31H14M43 31V39H34M43 31H34M34 9V17M34 9H30M34 39V31M34 39H30M14 9V17M14 9H18M14 39V31M14 39H18M14 17H18M34 17H30M34 31H30M14 31H18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 7V11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 17V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 27V31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 37V41"></svg:path></svg:g>`,
})
export class IconParkEditMovieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
