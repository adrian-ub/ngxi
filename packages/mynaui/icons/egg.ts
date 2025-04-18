import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEggIcon],svg[mynaui-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c4.004 0 7.25-3.224 7.25-7.2S16.004 3 12 3S4.75 9.824 4.75 13.8S7.996 21 12 21"></svg:path>`,
})
export class MynauiEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
