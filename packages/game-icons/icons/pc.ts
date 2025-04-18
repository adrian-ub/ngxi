import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPcIcon],svg[game-icons-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.65 117.89v276.22h124.62V117.89zm90.55 253.16a11 11 0 1 1 11-11a11 11 0 0 1-11 11m18-189.16H45.56v-16h92.63v16zm0-32H45.56v-16h92.63v16zm153 188.51h73.1v39.71h41.74v16H249.48v-16h41.74V338.4zm-118-220.51V322.4h309.15V117.89H173.19zM466.35 306.4H189.19V133.89h277.16z"></svg:path>`,
})
export class GameIconsPcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
