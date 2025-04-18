import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDogIcon],svg[icon-park-solid-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDog0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m17 10l-2-5c-2.167.833-6.8 5.8-6 13m22-8l2-5c2.167.833 6.8 5.8 6 13"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M42 28.5C42 38.165 33.941 43 24 43S6 38.165 6 28.5S14.059 9 24 9s18 9.835 18 19.5Z"></svg:path><svg:circle cx="20" cy="17" r="2" fill="#000"></svg:circle><svg:circle cx="28" cy="17" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 26c0 1.657.5 5.5-3 5.5a3 3 0 0 1-3-3"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.025 26c0 1.657-.5 5.5 3 5.5a3 3 0 0 0 3-3"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M26 25.75c0 .69-2 1.75-2 1.75s-2-1.06-2-1.75s.5-1.25 2-1.25s2 .56 2 1.25Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDog0)"></svg:path>`,
})
export class IconParkSolidDogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
