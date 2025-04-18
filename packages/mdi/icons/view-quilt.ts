import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewQuiltIcon],svg[mdi-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v6h11V5m-5 13h5v-6h-5M4 18h5V5H4m6 13h5v-6h-5z"></svg:path>`,
})
export class MdiViewQuiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
