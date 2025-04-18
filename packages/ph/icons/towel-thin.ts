import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTowelThinIcon],svg[ph-towel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a20 20 0 0 0-20 20v168a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V48a12 12 0 0 1 24 0v104a4 4 0 0 0 8 0V48a20 20 0 0 0-20-20M72 36h112a19.86 19.86 0 0 0-4 12v140H60V48a12 12 0 0 1 12-12m104 184H64a4 4 0 0 1-4-4v-20h120v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTowelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
