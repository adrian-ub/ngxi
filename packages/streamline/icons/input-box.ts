import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInputBoxIcon],svg[streamline-input-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5H13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5m-5 0H1a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 1 5h1.5M4 2.5h2m-2 9h2m-1-9v9"></svg:path>`,
})
export class StreamlineInputBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
