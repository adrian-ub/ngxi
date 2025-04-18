import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSideswipeIcon],svg[game-icons-sideswipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736c204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762l-118.71-68.004l118.346-65.303l1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"></svg:path>`,
})
export class GameIconsSideswipeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
