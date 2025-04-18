import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabasePointIcon],svg[icon-park-database-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 40H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40H42"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9V25C39 27.7614 32.2843 30 24 30C15.7157 30 9 27.7614 9 25V9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 17C39 19.7614 32.2843 22 24 22C15.7157 22 9 19.7614 9 17"></svg:path><svg:path fill="#2F88FF" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path fill="#2F88FF" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path></svg:g>`,
})
export class IconParkDatabasePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
