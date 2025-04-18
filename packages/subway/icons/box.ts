import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBoxIcon],svg[subway-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M275.2 512L480 409.6l20.5-307.2l-225.3 61.4zM29.5 409.6L234.3 512V163.8L9 102.4zM254.8 0L9 61.4l245.8 61.4l245.8-61.4z"></svg:path>`,
})
export class SubwayBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
