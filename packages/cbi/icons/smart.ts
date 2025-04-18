import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSmartIcon],svg[cbi-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.504 19.263L22 12.18l-5.496-6.761Zm-8.643-5.048a4.53 4.53 0 0 1 1.76-6.179a4.6 4.6 0 0 1 4.693.131l2.819-4.462a9.87 9.87 0 0 0-10.078-.28A9.807 9.807 0 0 0 3.259 16.8a9.877 9.877 0 0 0 13.4 3.781l-2.567-4.611a4.6 4.6 0 0 1-6.231-1.755"></svg:path>`,
})
export class CbiSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
