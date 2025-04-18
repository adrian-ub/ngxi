import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoLevelDownIcon],svg[entypo-level-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12V5h3v6h10V8l5 4.5l-5 4.5v-3H3a2 2 0 0 1-2-2"></svg:path>`,
})
export class EntypoLevelDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
