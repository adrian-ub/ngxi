import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLampIcon],svg[mynaui-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21v-9m0 9H9m3 0h3m-3-9h6l-2.513-7.702A2 2 0 0 0 13.614 3h-3.228a2 2 0 0 0-1.873 1.298L6 12z"></svg:path>`,
})
export class MynauiLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
