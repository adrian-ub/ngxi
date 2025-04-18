import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEthernetIcon],svg[gg-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 .5v20h7v3h2v-3h7V.5zm14 2H6v6h4v6h4v-6h4zm-12 16v-8h2v6h8v-6h2v8z" clip-rule="evenodd"></svg:path>`,
})
export class GgEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
