import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeerIcon],svg[icon-park-deer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M36 27C36 34.2165 30.6274 44 24 44C17.3726 44 12 34.2165 12 27C12 19.7835 13.5 16 24 16C34.5 16 36 19.7835 36 27Z"></svg:path><svg:ellipse fill="#2F88FF" stroke="#000" stroke-width="4" rx="5" ry="3.5" transform="scale(1 -1)rotate(45 40.625 38.327)"></svg:ellipse><svg:ellipse cx="9" cy="17.5" fill="#2F88FF" stroke="#000" stroke-width="4" rx="5" ry="3.5" transform="rotate(45 9 17.5)"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M12 4C12 10.6274 17.3726 16 24 16C30.6274 16 36 10.6274 36 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M18 7C18 11.9706 20.6863 16 24 16C27.3137 16 30 11.9706 30 7"></svg:path><svg:circle cx="20" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="34" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="26" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkDeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
