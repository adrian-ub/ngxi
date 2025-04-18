import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxeBattleIcon],svg[mdi-axe-battle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.47 12.43c-2.12 2.12-5.65 1.41-5.65 1.41V9.6L3.41 22L2 20.59L14.4 8.18h-4.24s-.71-3.53 1.41-5.65c2.12-2.124 5.66-1.42 5.66-1.42v4.25l.71-.71l1.41 1.41l-.71.71h4.25s.7 3.54-1.42 5.66"></svg:path>`,
})
export class MdiAxeBattleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
