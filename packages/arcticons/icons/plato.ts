import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlatoIcon],svg[arcticons-plato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.9 14.273l-.055 19.454L24.027 43.5l.056-19.453m0 0L24.027 43.5L7.1 33.727l.055-19.454z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.791 18.986l8.109-4.713L23.973 4.5L7.155 14.273l16.927 9.774l4.83-2.807l2.493 1.503z"></svg:path><svg:ellipse cx="24.028" cy="14.273" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.219" ry="1.147"></svg:ellipse><svg:ellipse cx="30.683" cy="14.273" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.219" ry="1.147"></svg:ellipse><svg:ellipse cx="17.372" cy="14.273" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.219" ry="1.147"></svg:ellipse><svg:ellipse cx="18.919" cy="27.762" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.231" ry="2.307" transform="rotate(-36.149 18.919 27.762)"></svg:ellipse><svg:ellipse cx="12.263" cy="23.513" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.231" ry="2.307" transform="rotate(-36.149 12.263 23.513)"></svg:ellipse><svg:ellipse cx="28.479" cy="27.762" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.307" ry="1.231" transform="rotate(-53.851 28.479 27.762)"></svg:ellipse><svg:ellipse cx="35.134" cy="23.513" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.307" ry="1.231" transform="rotate(-53.851 35.134 23.513)"></svg:ellipse><svg:ellipse cx="18.919" cy="34.261" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.231" ry="2.307" transform="rotate(-36.149 18.919 34.26)"></svg:ellipse><svg:ellipse cx="12.263" cy="30.012" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.231" ry="2.307" transform="rotate(-36.149 12.263 30.012)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.654 33.308c2.86 1.136 5.766-.495 7.628-4.421"></svg:path>`,
})
export class ArcticonsPlatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
