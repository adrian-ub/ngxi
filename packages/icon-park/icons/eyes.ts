import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEyesIcon],svg[icon-park-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 41C33.9411 41 42 32.678 42 27C42 21.322 33.9411 13 24 13C14.0589 13 6 21.3278 6 27C6 32.6722 14.0589 41 24 41Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13.2637 11.2661L15.8582 14.8863"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M35.625 11.7104L33.0304 15.3307"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24.0088 7V13"></svg:path></svg:g>`,
})
export class IconParkEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
