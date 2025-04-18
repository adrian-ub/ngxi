import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBox1FillIcon],svg[ri-box-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L13 22.421V11.423l-9.502-5.5zM2.5 7.656V17.5l8.5 4.921v-9.844z"></svg:path>`,
})
export class RiBox1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
