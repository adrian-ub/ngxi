import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalCrystalIcon],svg[devicon-original-crystal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M126.887 81.203L80.895 126.86c-.184.184-.461.274-.645.184l-62.828-16.742c-.277-.094-.461-.278-.461-.461L.035 47.437c-.09-.273 0-.457.184-.64L46.215 1.14c.183-.184.46-.274.644-.184l62.825 16.742c.277.094.46.278.46.461l16.836 62.403c.184.273.09.457-.093.64zM65.254 31.516L3.53 47.895c-.094 0-.183.183-.094.277l45.168 44.832c.09.094.278.094.278-.09L65.437 31.61c.094 0-.09-.183-.183-.093zm0 0"></svg:path>`,
})
export class DeviconOriginalCrystalIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
