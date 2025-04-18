import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassStangeIcon],svg[mdi-glass-stange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v20H8zm2 2v3h4V4z"></svg:path>`,
})
export class MdiGlassStangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
