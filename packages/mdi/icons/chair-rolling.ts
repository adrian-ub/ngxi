import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChairRollingIcon],svg[mdi-chair-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v3h-3v-3zM2 13h3v-3H2zm15-8c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v8h10zM7 15H6v2h5v1l-4 4h2.8l2.2-2.2l2.2 2.2H17l-4-4v-1h5v-2z"></svg:path>`,
})
export class MdiChairRollingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
