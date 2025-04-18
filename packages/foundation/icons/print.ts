import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPrintIcon],svg[foundation-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.443 35.141a1.825 1.825 0 0 0-1.818-1.708H75.511V11.857c0-1.012-.819-1.83-1.83-1.83H26.319c-1.011 0-1.83.818-1.83 1.83v21.576H11.375c-.969 0-1.754.755-1.818 1.708h-.012V71.91a1.83 1.83 0 0 0 1.83 1.829h13.114V58.425H75.51v15.314h13.114a1.83 1.83 0 0 0 1.83-1.829V35.141zm-19.919 6.49H29.476V16.844c0-1.012.819-1.83 1.83-1.83h37.387c1.011 0 1.83.818 1.83 1.83v24.787z"></svg:path><svg:path fill="currentColor" d="M29.602 88.143c0 1.012.819 1.83 1.83 1.83h37.136c1.011 0 1.83-.818 1.83-1.83v-24.64H29.602z"></svg:path>`,
})
export class FoundationPrintIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
