import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBox2FillIcon],svg[ri-box-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.658v8.689l7.5 4.342V12z"></svg:path>`,
})
export class RiBox2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
