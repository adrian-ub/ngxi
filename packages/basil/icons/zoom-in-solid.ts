import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilZoomInSolidIcon],svg[basil-zoom-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.385 15.446a6.751 6.751 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zM6.95 10.2a.75.75 0 0 1 .75-.75h1.75V7.7a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H7.7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BasilZoomInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
