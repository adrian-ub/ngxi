import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowLeftIcon],svg[ix-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.32 234.672H188.347l70.25-70.25l-30.167-30.167l-121.75 121.75l121.75 121.74l30.167-30.167l-70.248-70.24H405.32z"></svg:path>`,
})
export class IxArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
