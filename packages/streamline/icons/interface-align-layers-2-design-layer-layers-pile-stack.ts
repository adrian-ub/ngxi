import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon],svg[streamline-interface-align-layers-2-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="6" x="5.5" y="1.5" rx="1"></svg:rect><svg:path d="M11 10H4a1 1 0 0 1-1-1V4"></svg:path><svg:path d="M9 12.5H1.5a1 1 0 0 1-1-1V6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
