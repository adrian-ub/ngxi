import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDiscIcon],svg[mdi-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 0 1-2-2c0-1.11.89-2 2-2s2 .89 2 2a2 2 0 0 1-2 2m0-10a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
