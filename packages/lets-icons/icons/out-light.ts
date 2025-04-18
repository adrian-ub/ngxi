import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOutLightIcon],svg[lets-icons-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 3v-.5h-.5V3zm9.646 10.354a.5.5 0 0 0 .708-.708zM3.5 11V3h-1v8zM3 3.5h8v-1H3zm-.354-.146l10 10l.708-.708l-10-10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M4 15v0c0 1.87 0 2.804.402 3.5A3 3 0 0 0 5.5 19.598C6.196 20 7.13 20 9 20h5c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14V9c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 18.5 4.402C17.804 4 16.87 4 15 4v0"></svg:path></svg:g>`,
})
export class LetsIconsOutLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
