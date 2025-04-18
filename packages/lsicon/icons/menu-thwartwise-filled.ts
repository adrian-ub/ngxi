import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuThwartwiseFilledIcon],svg[lsicon-menu-thwartwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zm0 3H2V6h12zm0 3H2V9h12zm0 3H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMenuThwartwiseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
