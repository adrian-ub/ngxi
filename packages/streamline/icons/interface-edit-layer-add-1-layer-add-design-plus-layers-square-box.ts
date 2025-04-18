import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon],svg[streamline-interface-edit-layer-add-1-layer-add-design-plus-layers-square-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.19v4.62M3.19 5.5h4.62"></svg:path><svg:rect width="10" height="10" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 13.5h9a1 1 0 0 0 1-1v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
