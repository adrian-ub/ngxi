import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSoundFillIcon],svg[lets-icons-sound-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M13 16.753V14H8.818a3.249 3.249 0 1 0 .403 6.472l.557-.07A3.68 3.68 0 0 0 13 16.754" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M13 8v-.611c0-1.619 0-2.428.474-2.987s1.272-.693 2.868-.96L18.7 3.05c.136-.022.204-.034.24.006s.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11s-.05.026-.111.038zm0 0v6m0 0v2.753a3.68 3.68 0 0 1-3.222 3.65l-.557.07A3.249 3.249 0 1 1 8.818 14z"></svg:path></svg:g>`,
})
export class LetsIconsSoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
