import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMixIcon],svg[ix-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m269.264 271.083l70.256 70.25l56.966-.001l-27.57-27.58l30.17-30.17l79.084 79.084l-79.085 79.085l-30.17-30.17L396.487 384H321.83l-82.745-82.74zM399.085 70.248l79.085 79.085l-79.085 79.085l-30.17-30.17l27.572-27.582H339.52L126.17 384H42.667v-42.667h65.813L321.83 128l74.657-.001l-27.572-27.581zM126.17 128l82.745 82.739l-30.179 30.177l-70.256-70.25H42.667V128z"></svg:path>`,
})
export class IxMixIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
