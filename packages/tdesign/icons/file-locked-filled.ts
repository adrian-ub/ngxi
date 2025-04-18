import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileLockedFilledIcon],svg[tdesign-file-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h8.5v-6a6.5 6.5 0 0 1 9.5-5.768V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm.251 8.75v.75H22.5V23h-9v-6.5h1.251v-.75a3.25 3.25 0 0 1 6.5 0m-2 0a1.25 1.25 0 0 0-2.5 0v.75h2.5z"></svg:path>`,
})
export class TdesignFileLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
