import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBringToFrontIcon],svg[ix-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 298.667v42.666h-21.333v64h64V384h42.666v64H64V298.667zm234.667 64H149.333V149.333h213.334zM448 64v149.333h-64v-42.666h21.333v-64h-64V128h-42.666V64z"></svg:path>`,
})
export class IxBringToFrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
