import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBooksIcon],svg[arcticons-emoji-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.109 14.263a3.302 3.302 0 0 0-.342 6.365l17.257 5.038L42.5 20.674"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.109 20.756a3.302 3.302 0 0 0-.342 6.365l17.257 5.038L42.5 27.167"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.109 27.32a3.302 3.302 0 0 0-.342 6.364l17.257 5.038L42.5 33.73M25.024 9.278L42.5 14.233l-17.476 4.992l-16.942-4.974zM42.5 14.233V33.73"></svg:path>`,
})
export class ArcticonsEmojiBooksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
