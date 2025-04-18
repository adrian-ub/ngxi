import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFacebookFill12Icon],svg[garden-facebook-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 0 1 .813 11.945V7.63h1.552l.244-1.585H6.812v-.867c0-.658.214-1.242.827-1.242h.985V2.55c-.173-.024-.538-.075-1.23-.075c-1.444 0-2.29.767-2.29 2.513v1.055H3.618v1.585h1.484v4.304A6.001 6.001 0 0 1 6 0"></svg:path>`,
})
export class GardenFacebookFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
