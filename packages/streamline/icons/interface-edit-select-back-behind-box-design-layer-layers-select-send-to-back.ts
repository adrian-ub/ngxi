import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon],svg[streamline-interface-edit-select-back-behind-box-design-layer-layers-select-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 9.5a1 1 0 0 0 1 1m0-10a1 1 0 0 0-1 1m10 0a1 1 0 0 0-1-1m0 10a1 1 0 0 0 1-1"></svg:path><svg:path d="M10.5 13.5h-8a2 2 0 0 1-2-2v-8m7-3h2m-2 10h2m4-6v2m-10-2v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
