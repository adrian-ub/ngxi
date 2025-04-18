import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapLockedFilledIcon],svg[tdesign-map-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V16.5a6.5 6.5 0 0 1 3-5.478V5.09l-5-2.953zM22 2.5v8.876a6.52 6.52 0 0 0-5.5-1.202V4.767zm-.75 12.75V16h1.249v6.5h-9V16h1.251v-.75a3.25 3.25 0 0 1 6.5 0m-2 0a1.25 1.25 0 1 0-2.5 0V16h2.5z"></svg:path>`,
})
export class TdesignMapLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
