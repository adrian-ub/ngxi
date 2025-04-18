import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsThumbtackOutlineIcon],svg[teenyicons-thumbtack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 14.5L5 10M.5 5.5l9 9m-1-14l6 6m-13 0l8-5m-1 12l5-8"></svg:path>`,
})
export class TeenyiconsThumbtackOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
