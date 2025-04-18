import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilSmallArrowLeftIcon],svg[il-small-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 414q-10 0-16-7L7 245q-7-7-7-16t7-17L169 50q7-7 17-7t16 7t7 16t-7 17L56 229l146 146q7 7 7 16t-7 16t-17 7"></svg:path>`,
})
export class IlSmallArrowLeftIcon {
  readonly viewBox = input("0 0 210 700")
  readonly width = input("0.3em")
  readonly height = input("1em")
}
