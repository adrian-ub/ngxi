import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsClusterIcon],svg[grommet-icons-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 9h8V1H8zM1 23h8v-8H1zm14 0h8v-8h-8zM5 15l3-6zm5 4h4zm6-10l3 6z"></svg:path>`,
})
export class GrommetIconsClusterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
