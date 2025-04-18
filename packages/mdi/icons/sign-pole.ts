import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignPoleIcon],svg[mdi-sign-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 3l1-1l1 1v17a2 2 0 0 1 2 2H9c0-1.1.9-2 2-2z"></svg:path>`,
})
export class MdiSignPoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
