import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePlayBasketballIcon],svg[icon-park-twotone-play-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPlayBasketball0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-miterlimit="2" stroke-width="4" d="M32 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m23 40l8.11-2.06c.78-.19 1.02-1.19.42-1.72L23 29l4-8l-10.41-3.74c-.5-.18-.9-.54-1.13-1.02L11 8"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m23 29l-6.97 8.79c-.21.25-.47.45-.77.57L5 42m22-21l9.9 2.79c.47.14.88.44 1.14.85L42 31"></svg:path><svg:path fill="#fff" d="M18 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPlayBasketball0)"></svg:path>`,
})
export class IconParkTwotonePlayBasketballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
