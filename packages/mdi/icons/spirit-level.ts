import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpiritLevelIcon],svg[mdi-spirit-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8H2v8h20zm-4 6v-4h2v4zm-7-2h2a2 2 0 0 0 2-2h2v4H7v-4h2a2 2 0 0 0 2 2m-7 2v-4h2v4z"></svg:path>`,
})
export class MdiSpiritLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
