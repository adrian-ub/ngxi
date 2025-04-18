import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAngleRightIcon],svg[mdi-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h2v7h6v6h7v2H5zm2 13h4v-4H7z"></svg:path>`,
})
export class MdiAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
