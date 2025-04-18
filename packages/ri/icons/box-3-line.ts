import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBox3LineIcon],svg[ri-box-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078L12 10.844l6.506-3.766L12 3.31zM4.5 8.813v7.534L11 20.11v-7.533zM13 20.11l6.5-3.763V8.813L13 12.576z"></svg:path>`,
})
export class RiBox3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
