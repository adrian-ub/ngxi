import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMagentoIcon],svg[lineicons-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L3.354 7v10l2.452 1.452v-10L12 4.87l6.193 3.58v10L20.645 17V7z"></svg:path><svg:path fill="currentColor" d="M13.258 18.452L12 19.129l-1.226-.677v-10L8.258 9.87v10L12 22l3.741-2.129v-10l-2.483-1.42z"></svg:path>`,
})
export class LineiconsMagentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
