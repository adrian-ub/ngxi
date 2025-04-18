import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarIncreaseSolidIcon],svg[streamline-graph-bar-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.997.22a.75.75 0 0 1 .819-.163l2.127.882a.75.75 0 0 1 .408.977l-.869 2.127a.75.75 0 0 1-1.386.006l-.343-.82L2.115 6.92a.75.75 0 1 1-.59-1.38l8.649-3.695l-.337-.805a.75.75 0 0 1 .16-.82m2.753 5.26a1 1 0 0 1 1 1v7a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-7a1 1 0 0 1 1-1zM8.457 7.272a1 1 0 0 0-.707-.292h-1.5a1 1 0 0 0-1 1v5.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-5.5a1 1 0 0 0-.293-.708M2.75 8.48a1 1 0 0 1 1 1v4a.5.5 0 0 1-.5.5H.75a.5.5 0 0 1-.5-.5v-4a1 1 0 0 1 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphBarIncreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
