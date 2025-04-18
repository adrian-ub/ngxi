import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPeaceBoldIcon],svg[ph-peace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a83.4 83.4 0 0 1-9 37.84l-63-44.09V44.87A84.12 84.12 0 0 1 212 128m-96-83.13v76.88l-63 44.09a83.93 83.93 0 0 1 63-121ZM66.83 185.48L116 151.05v60.08a83.86 83.86 0 0 1-49.17-25.65M140 211.13v-60.08l49.17 34.43A83.86 83.86 0 0 1 140 211.13"></svg:path>`,
})
export class PhPeaceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
