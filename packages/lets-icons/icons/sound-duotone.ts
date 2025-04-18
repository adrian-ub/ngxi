import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSoundDuotoneIcon],svg[lets-icons-sound-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M13 8v-.611c0-1.619 0-2.428.474-2.987s1.272-.693 2.868-.96L18.7 3.05c.136-.022.204-.034.24.006s.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11s-.05.026-.111.038zv8.753a3.68 3.68 0 0 1-3.222 3.65l-.557.07A3.249 3.249 0 1 1 8.818 14H13z"></svg:path><svg:path stroke="currentColor" d="M13 14H8.818a3.249 3.249 0 1 0 .403 6.472l.557-.07A3.68 3.68 0 0 0 13 16.754V7.39c0-1.619 0-2.428.474-2.987s1.272-.693 2.868-.96L18.7 3.05c.136-.022.204-.034.24.006s.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11s-.05.026-.111.038L13 8"></svg:path></svg:g>`,
})
export class LetsIconsSoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
