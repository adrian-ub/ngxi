import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLoopMinusOffIcon],svg[pepicons-pop-loop-minus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M4.828 4.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9" clip-rule="evenodd"></svg:path><svg:path d="M11.9 14.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zM6.707 9.914a1 1 0 1 1 0-2h4.485a1 1 0 1 1 0 2z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopLoopMinusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
