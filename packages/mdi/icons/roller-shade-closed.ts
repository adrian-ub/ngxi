import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRollerShadeClosedIcon],svg[mdi-roller-shade-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zM6 19v-2h5v2zm7 0v-2h5v2z"></svg:path>`,
})
export class MdiRollerShadeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
