import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeLightIcon],svg[gg-smart-home-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.034 6.5a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0zm8 0v4a3 3 0 0 1-6 0v-4a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path d="M12.034 16.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-4.29-.06a1 1 0 1 1 1.88.684l-1.368 3.759a1 1 0 1 1-1.88-.684zm7.23-.598a1 1 0 0 0-.598 1.282l1.369 3.759a1 1 0 1 0 1.879-.684l-1.368-3.76a1 1 0 0 0-1.282-.597"></svg:path></svg:g>`,
})
export class GgSmartHomeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
