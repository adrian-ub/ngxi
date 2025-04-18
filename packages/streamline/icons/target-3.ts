import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTarget3Icon],svg[streamline-target-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.875 7a6.125 6.125 0 1 1 12.25 0A6.125 6.125 0 0 1 .875 7M7 .875v1.633M13.125 7h-1.633M7 13.125v-1.633M.875 7h1.633m2.888 0h3.208M7 5.396v3.208"></svg:path>`,
})
export class StreamlineTarget3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
