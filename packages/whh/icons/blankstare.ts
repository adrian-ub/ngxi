import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBlankstareIcon],svg[whh-blankstare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m0 448q-13 0-22.5 9.5T256 736t9.5 22.5T288 768h448q13 0 22.5-9.5T768 736t-9.5-22.5T736 704zm448-448q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5"></svg:path>`,
})
export class WhhBlankstareIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
