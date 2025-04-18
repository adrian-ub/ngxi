import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareBoldIcon],svg[ph-intersect-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M52 148V52h96v32H96a12 12 0 0 0-12 12v52Zm56-23l23 23h-23Zm40 6l-23-23h23Zm56 73h-96v-32h52a12 12 0 0 0 12-12v-52h32Z"></svg:path>`,
})
export class PhIntersectSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
