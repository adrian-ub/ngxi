import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBox1LineIcon],svg[ri-box-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078L13 11.423v8.687l6.5-3.763V7.653L12 3.311zM4.5 8.813v7.534L11 20.11v-7.533z"></svg:path>`,
})
export class RiBox1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
