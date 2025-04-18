import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondAltDuotoneIcon],svg[lets-icons-dimond-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="m12 20l-7.32-9.15c-.333-.416-.5-.624-.544-.874s.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357S7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378c.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008c-.045.25-.211.458-.544.874zm0 0l3.5-11M12 20L8.5 9m11 1l-4-1m0 0L14 5m1.5 4h-7M10 5L8.5 9m0 0l-4 1"></svg:path></svg:g>`,
})
export class LetsIconsDimondAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
