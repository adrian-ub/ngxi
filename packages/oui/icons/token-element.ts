import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenElementIcon],svg[oui-token-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.39 9.736l-1.041.94L3.258 8l3.09-2.677l1.041.94l-2.032 1.722v.03zm2.777.94l-1.04-.94l2.032-1.721v-.03L9.126 6.264l1.04-.94L13.259 8z"></svg:path>`,
})
export class OuiTokenElementIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
