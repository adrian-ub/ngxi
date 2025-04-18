import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSizeDownIcon],svg[lets-icons-size-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 20l-.6.8l.6.45l.6-.45zm1-12a1 1 0 1 0-2 0zm-5.6 9.8l4 3l1.2-1.6l-4-3zm5.2 3l4-3l-1.2-1.6l-4 3zm.4-.8V8h-2v12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 13v0c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C4 10.395 4 9.93 4 9V8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 5.5 3.402C6.196 3 7.13 3 9 3h6c1.87 0 2.804 0 3.5.402A3 3 0 0 1 19.598 4.5C20 5.196 20 6.13 20 8v1c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C17.396 13 16.93 13 16 13v0"></svg:path></svg:g>`,
})
export class LetsIconsSizeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
