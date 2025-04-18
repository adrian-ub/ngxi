import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignTabletTwotoneIcon],svg[ant-design-tablet-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 824H232V136h560z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M232 888h560V136H232zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignTabletTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
