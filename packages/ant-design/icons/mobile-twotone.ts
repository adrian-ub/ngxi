import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignMobileTwotoneIcon],svg[ant-design-mobile-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 824H288V136h448z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M288 888h448V136H288zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M472 786a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignMobileTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
