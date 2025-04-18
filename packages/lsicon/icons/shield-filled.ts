import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShieldFilledIcon],svg[lsicon-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v7a6 6 0 0 0 12 0zM5.854 7.146l-.708.708L7.5 10.207l3.854-3.853l-.707-.708L7.5 8.793z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShieldFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
