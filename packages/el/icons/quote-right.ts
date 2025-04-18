import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elQuoteRightIcon],svg[el-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M681.526 1094.657c212.643-14.942 518.306-48.892 518.474-465.344v-523.97H725.496v560.61h157.559c9.98 149.693-113.285 188.346-247.329 218.017zm-635.724 0c212.644-14.942 518.307-48.894 518.474-465.344v-523.97H89.77v560.61h157.559C257.311 815.647 134.044 854.3 0 883.971z"></svg:path>`,
})
export class ElQuoteRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
