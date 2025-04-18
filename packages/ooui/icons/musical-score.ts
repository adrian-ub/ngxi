import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMusicalScoreIcon],svg[ooui-musical-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15V5h8v10h2V2H6v13"></svg:path><svg:circle cx="15" cy="15" r="3" fill="currentColor"></svg:circle><svg:circle cx="5" cy="15" r="3" fill="currentColor"></svg:circle>`,
})
export class OouiMusicalScoreIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
