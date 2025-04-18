import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilSmallArrowUpIcon],svg[il-small-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 310q0-10 7-16l162-163q7-7 17-7t16 7l162 163q7 7 7 16t-7 16t-16 7t-17-7L185 181L39 326q-7 7-16 7t-16-6.5T0 310"></svg:path>`,
})
export class IlSmallArrowUpIcon {
  readonly viewBox = input("0 0 380 700")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
