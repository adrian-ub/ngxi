import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownLeftIcon],svg[mynaui-fat-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4.077q-3.303 4.216-5.866 4.785q-2.564.569-4.88.172V4L3 12.214L10.253 20v-4.784Q14.54 15.18 17.54 12T21 4.077"></svg:path>`,
})
export class MynauiFatCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
