import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAssetOutdoorIcon],svg[ix-asset-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 163.173L256 113.395l85.333 49.778v100.321L256 313.271l-85.333-49.777zM256 64l128 74.667V288l-128 74.667L128 288V138.667zm-21.333 192v-85.333h42.666V256zM128 426.667V384h256v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxAssetOutdoorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
