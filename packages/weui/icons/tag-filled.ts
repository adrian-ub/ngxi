import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiTagFilledIcon],svg[weui-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.207 14.207a1 1 0 0 1 0-1.414l9.5-9.5A1 1 0 0 1 13.414 3H20a1 1 0 0 1 1 1v6.586a1 1 0 0 1-.293.707l-9.5 9.5a1 1 0 0 1-1.414 0zM16 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class WeuiTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
