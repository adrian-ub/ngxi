import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTunnelIcon],svg[iconoir-tunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21 20L3 14"></svg:path><svg:path d="M16 10v1m-4-2v1M8 8v1"></svg:path><svg:path stroke-linejoin="round" d="M3 21h18v-9a9 9 0 1 0-18 0z"></svg:path></svg:g>`,
})
export class IconoirTunnelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
