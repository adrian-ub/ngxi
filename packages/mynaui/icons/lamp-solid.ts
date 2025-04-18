import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLampSolidIcon],svg[mynaui-lamp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.386 2.25A2.75 2.75 0 0 0 7.8 4.065l-2.513 7.702A.75.75 0 0 0 6 12.75h5.25v7.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-7.5H18a.75.75 0 0 0 .713-.983L16.2 4.065l-.011-.03a2.75 2.75 0 0 0-2.575-1.785z"></svg:path>`,
})
export class MynauiLampSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
