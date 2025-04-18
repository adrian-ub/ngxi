import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerUpLeftIcon],svg[mynaui-fat-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.923q-3.303-4.216-5.866-4.785q-2.564-.569-4.88-.172V20L3 11.786L10.253 4v4.784Q14.54 8.82 17.54 12T21 19.923"></svg:path>`,
})
export class MynauiFatCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
