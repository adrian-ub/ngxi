import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSevenPointedStarIcon],svg[game-icons-seven-pointed-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 22.017l-69.427 102.007l-123.038-9.32L100 232.584l-84 90.384l114.898 44.987l18.292 122.028L256 428.2l106.81 61.783l18.292-122.028L496 322.968l-84-90.385l36.465-117.88l-123.038 9.32z"></svg:path>`,
})
export class GameIconsSevenPointedStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
