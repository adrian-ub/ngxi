import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMobileIcon],svg[oui-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0A1.5 1.5 0 0 0 3 1.5v13A1.5 1.5 0 0 0 4.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 11.5 0zM4 1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H4zM4 13v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V13zm0-1h8V5H4z" clip-rule="evenodd"></svg:path>`,
})
export class OuiMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
