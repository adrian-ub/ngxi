import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTildeIcon],svg[mdi-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15s0-6 6-6c4 0 4.5 3.5 7.5 3.5c4 0 4-3.5 4-3.5H22s0 6-6 6c-4 0-5.5-3.5-7.5-3.5c-4 0-4 3.5-4 3.5z"></svg:path>`,
})
export class MdiTildeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
