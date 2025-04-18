import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowUpBoldIcon],svg[ph-box-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.73 66.63l-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-68.49a12 12 0 0 1-17 17L140 141v39a12 12 0 0 1-24 0v-39l-11.51 11.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhBoxArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
