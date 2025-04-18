import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFunnelDuotoneIcon],svg[iconamoon-funnel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 4H4l5.6 7.467a2 2 0 0 1 .4 1.2V20l4-2v-5.333a2 2 0 0 1 .4-1.2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 4H4l5.6 7.467a2 2 0 0 1 .4 1.2V20l4-2v-5.333a2 2 0 0 1 .4-1.2z"></svg:path></svg:g>`,
})
export class IconamoonFunnelDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
