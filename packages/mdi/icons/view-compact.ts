import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewCompactIcon],svg[mdi-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h6v-7H3zm7 0h12v-7H10zM3 5v6h19V5z"></svg:path>`,
})
export class MdiViewCompactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
