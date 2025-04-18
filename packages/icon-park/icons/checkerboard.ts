import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCheckerboardIcon],svg[icon-park-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4H7C5.34315 4 4 5.34315 4 7V17V31V41C4 42.6569 5.34315 44 7 44H17H31H41C42.6569 44 44 42.6569 44 41V31V17V7C44 5.34315 42.6569 4 41 4H31H17Z"></svg:path><svg:line x1="23" x2="44" y1="17" y2="17"></svg:line><svg:line x1="4" x2="13" y1="17" y2="17"></svg:line><svg:line x1="35" x2="44" y1="31" y2="31"></svg:line><svg:line x1="6" x2="25" y1="31" y2="31"></svg:line><svg:line x1="17" x2="17" y1="21" y2="44"></svg:line><svg:path d="M31 4L31 27"></svg:path><svg:path d="M31 35L31 44"></svg:path><svg:path d="M17 4L17 13"></svg:path><svg:path fill="#2F88FF" d="M35 31C35 33.2091 33.2091 35 31 35C28.7909 35 27 33.2091 27 31C27 28.7909 28.7909 27 31 27C33.2091 27 35 28.7909 35 31Z"></svg:path><svg:path fill="#2F88FF" d="M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"></svg:path></svg:g>`,
})
export class IconParkCheckerboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
