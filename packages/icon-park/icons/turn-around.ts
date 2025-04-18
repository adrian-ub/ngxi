import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTurnAroundIcon],svg[icon-park-turn-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path fill="#2F88FF" d="M27 20H21C20.0713 20 19.607 20 19.2159 20.0385C15.4176 20.4126 12.4126 23.4176 12.0385 27.2159C12 27.607 12 28.0713 12 29H36C36 28.0713 36 27.607 35.9615 27.2159C35.5874 23.4176 32.5824 20.4126 28.7841 20.0385C28.393 20 27.9287 20 27 20Z"></svg:path><svg:path d="M41 26.7837C42.9017 28.0079 44 29.4527 44 31C44 35.4183 35.0457 39 24 39C12.9543 39 4 35.4183 4 31C4 29.4527 5.09827 28.0079 7 26.7837"></svg:path><svg:path d="M19 34L24 39L19 44"></svg:path></svg:g>`,
})
export class IconParkTurnAroundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
