import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTargetOneIcon],svg[icon-park-target-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 39.8887C32.7287 39.8887 39.8887 32.7287 39.8887 23.8887C39.8887 15.0487 32.7287 7.88867 23.8887 7.88867C15.0487 7.88867 7.88867 15.0487 7.88867 23.8887C7.88867 32.7287 15.0487 39.8887 23.8887 39.8887Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 31.8887C28.3087 31.8887 31.8887 28.3087 31.8887 23.8887C31.8887 19.4687 28.3087 15.8887 23.8887 15.8887C19.4687 15.8887 15.8887 19.4687 15.8887 23.8887C15.8887 28.3087 19.4687 31.8887 23.8887 31.8887Z"></svg:path><svg:path fill="#000" d="M23.8887 25.8887C24.9887 25.8887 25.8887 24.9887 25.8887 23.8887C25.8887 22.7887 24.9887 21.8887 23.8887 21.8887C22.7887 21.8887 21.8887 22.7887 21.8887 23.8887C21.8887 24.9887 22.7887 25.8887 23.8887 25.8887Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 7.88867V3.88867"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M37.8887 43.8887L33.8887 36.8887"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M13.8887 36.8887L9.88867 43.8887"></svg:path></svg:g>`,
})
export class IconParkTargetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
