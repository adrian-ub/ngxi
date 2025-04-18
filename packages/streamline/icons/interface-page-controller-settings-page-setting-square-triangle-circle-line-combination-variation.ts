import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerSettingsPageSettingSquareTriangleCircleLineCombinationVariationIcon],svg[streamline-interface-page-controller-settings-page-setting-square-triangle-circle-line-combination-variation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 1h5v5h-5zm12.75 12.5h-5m0-5h5m-5 2.5h5m.25-5H8L10.75.5L13.5 6z"></svg:path><svg:circle cx="3" cy="11" r="2.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfacePageControllerSettingsPageSettingSquareTriangleCircleLineCombinationVariationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
