import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTowelDuotoneIcon],svg[ph-towel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 192v24a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-24Z" opacity=".2"></svg:path><svg:path d="M200 24H72a24 24 0 0 0-24 24v168a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V48a8 8 0 0 1 16 0v104a8 8 0 0 0 16 0V48a24 24 0 0 0-24-24M72 40h105.37a23.8 23.8 0 0 0-1.37 8v136H64V48a8 8 0 0 1 8-8m-8 176v-16h112v16Z"></svg:path></svg:g>`,
})
export class PhTowelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
