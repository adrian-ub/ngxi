import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpam3FillIcon],svg[ri-spam-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zM8 11.001v2h8v-2z"></svg:path>`,
})
export class RiSpam3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
