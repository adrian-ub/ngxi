import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDogHouseIcon],svg[game-icons-dog-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 27.52L25 212.3v41L256 68.48L487 253.3v-41zm0 64L73 237.9V487h94c.1-32.3.8-79.5 10.2-121c5.2-22.7 12.9-43.9 25.4-60c12.6-16.2 30.7-27 53.4-27s40.8 10.8 53.4 27c12.5 16.1 20.2 37.3 25.4 60c9.4 41.5 10.1 88.7 10.2 121h94V237.9zM163.9 198.2a25.03 14.73 15.04 0 1 12.1 2.2a25.03 14.73 15.04 0 1 17.7 14.6h124.6a14.73 25.03 74.96 0 1 17.7-14.6a14.73 25.03 74.96 0 1 12.1-2.2a14.73 25.03 74.96 0 1 17.8 7.8a14.73 25.03 74.96 0 1-13 19.6a25.03 14.73 15.04 0 1 10.7 18.4a25.03 14.73 15.04 0 1-29.9 5.7a25.03 14.73 15.04 0 1-18.1-16.7H196.4a14.73 25.03 74.96 0 1-18.1 16.7a14.73 25.03 74.96 0 1-29.9-5.7a14.73 25.03 74.96 0 1 10.7-18.4a25.03 14.73 15.04 0 1-13-19.6a25.03 14.73 15.04 0 1 17.8-7.8"></svg:path>`,
})
export class GameIconsDogHouseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
