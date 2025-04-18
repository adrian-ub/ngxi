import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewCompactOutlineIcon],svg[mdi-view-compact-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h19V5zm2 2h15v4H5zm0 10v-4h4v4zm6 0v-4h9v4z"></svg:path>`,
})
export class MdiViewCompactOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
