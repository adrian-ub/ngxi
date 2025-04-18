import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopBoldIcon],svg[ph-rows-plus-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 156H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152Zm4-116H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152ZM96 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhRowsPlusTopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
