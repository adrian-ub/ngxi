import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggThermometerIcon],svg[gg-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.95 5.636a1 1 0 1 1 1.414 1.414l-7.071 7.071a1 1 0 1 1-1.414-1.414z"></svg:path><svg:path fill-rule="evenodd" d="M7.828 17.586a5 5 0 0 0 6.293-.636l7.071-7.071a5 5 0 1 0-7.07-7.071L7.05 9.878a5 5 0 0 0-.636 6.294l-3.606 3.606a1 1 0 1 0 1.414 1.415zm4.88-2.05l7.07-7.071a3 3 0 1 0-4.242-4.243l-7.071 7.071a3 3 0 1 0 4.242 4.243" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
