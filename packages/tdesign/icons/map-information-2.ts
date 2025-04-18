import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapInformation2Icon],svg[tdesign-map-information-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3 3 0 0 0-3 3c0 1.237.782 2.498 1.738 3.544c.456.498.914.908 1.262 1.195a13 13 0 0 0 1.262-1.195C14.218 9.498 15 8.238 15 7a3 3 0 0 0-3-3m0 10.214l-.567-.39l-.002-.002l-.004-.002l-.012-.009l-.041-.03l-.144-.104a14.6 14.6 0 0 1-1.968-1.784C8.218 10.751 7 9.013 7 7a5 5 0 0 1 10 0c0 2.012-1.218 3.752-2.262 4.893a14.6 14.6 0 0 1-2.112 1.889l-.04.029l-.013.009l-.004.002l-.001.001zm0-6.964a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-7.145 3H7v2H4.895l-.778 7h15.766l-.778-7H17v-2h3.895l1.222 11H1.883z"></svg:path>`,
})
export class TdesignMapInformation2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
