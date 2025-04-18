import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBallotBoxWithBallotIcon],svg[arcticons-emoji-ballot-box-with-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.31 42.5V22.018h9.258m13.707.001H41.69V42.5M24.868 25.949l-9.226-3.783L22.475 5.5l11.437 4.687L27.5 25.825m-13.135.177h19.284M41.69 42.5H6.31"></svg:path>`,
})
export class ArcticonsEmojiBallotBoxWithBallotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
