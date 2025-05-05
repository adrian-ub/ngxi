import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTrophyIcon],svg[picon-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4q2-2 0-2M2 2Q0 2 2 4m3 3h2v1H1V7h2V6q-5-5-1-5V0h4v1q4 0-1 5"></svg:path>`,
})
export class PiconTrophyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
