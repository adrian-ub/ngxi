import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon],svg[streamline-interface-edit-select-front-design-front-layer-layers-select-send-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1"></svg:rect><svg:path d="M.5 12.5a1 1 0 0 0 1 1m3 0H6m3 0h1.5M.5 8v1.5m0-6V5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
