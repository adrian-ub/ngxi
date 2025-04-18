import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoLevelUpIcon],svg[entypo-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9v7h-3v-6H6v3L1 8.5L6 4v3h11c1.104 0 2 .897 2 2"></svg:path>`,
})
export class EntypoLevelUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
