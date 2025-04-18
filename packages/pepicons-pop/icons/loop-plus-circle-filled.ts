import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLoopPlusCircleFilledIcon],svg[pepicons-pop-loop-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopLoopPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M7.828 7.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M14.9 14.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 14.9 14.9" clip-rule="evenodd"></svg:path><svg:path d="M14.9 17.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zm-4.693-4.564a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M11.207 10.164a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopLoopPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopLoopPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
