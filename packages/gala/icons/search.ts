import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaSearchIcon],svg[gala-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="16"><svg:path d="m 89.074145,145.23139 -68.17345,68.17344"></svg:path><svg:path d="M 111.27275,167.42999 43.099304,235.60344"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 43.099305,235.60344 a 15.696788,15.696788 0 0 1 -22.19861,0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 20.900695,213.40483 a 15.696788,15.696788 0 0 0 0,22.19861"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 240.65575,86.483932 A 70.635544,70.635544 0 0 1 170.0202,157.11948 70.635544,70.635544 0 0 1 99.384659,86.483932 70.635544,70.635544 0 0 1 170.0202,15.848389 70.635544,70.635544 0 0 1 240.65575,86.483932 Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 89.074145,145.23139 22.198605,22.1986"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 100.17344,156.33068 19.89988,-19.89987"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 70.126446,164.17908 22.198606,22.1986"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 209.26216,86.483936 A 39.241967,39.241967 0 0 1 170.0202,125.7259"></svg:path></svg:g>`,
})
export class GalaSearchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
