import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrandAwarenessOutlineIcon],svg[material-symbols-light-brand-awareness-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.654 12.5v-1h3.23v1zm1.085 6.462l-2.585-1.939l.623-.792l2.585 1.938zM14.7 7.692l-.623-.792l2.585-1.939l.623.793zM4.116 14v-4h3.423l3.577-3.577v11.154L7.539 14zm6-5.15L7.965 11h-2.85v2h2.85l2.15 2.15zM7.615 12"></svg:path>`,
})
export class MaterialSymbolsLightBrandAwarenessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
