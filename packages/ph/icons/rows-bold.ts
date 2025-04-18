import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRowsBoldIcon],svg[ph-rows-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136H48a20 20 0 0 0-20 20v36a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-36a20 20 0 0 0-20-20m-4 52H52v-28h152Zm4-144H48a20 20 0 0 0-20 20v36a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 52H52V68h152Z"></svg:path>`,
})
export class PhRowsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
