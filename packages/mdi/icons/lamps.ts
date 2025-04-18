import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLampsIcon],svg[mdi-lamps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 2l2 7H2l2-7m2 8h2v10h3v2H3v-2h3zm14-2l2 7H12l2-7m2 8h2v4h3v2h-8v-2h3z"></svg:path>`,
})
export class MdiLampsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
