import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFunnelFillIcon],svg[iconamoon-funnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 0-.8 1.6l5.6 7.467a1 1 0 0 1 .2.6V20a1 1 0 0 0 1.447.894l4-2A1 1 0 0 0 15 18v-5.333a1 1 0 0 1 .2-.6L20.8 4.6A1 1 0 0 0 20 3z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFunnelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
