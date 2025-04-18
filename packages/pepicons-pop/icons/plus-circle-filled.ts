import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPlusCircleFilledIcon],svg[pepicons-pop-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPlusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8 14a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z"></svg:path><svg:path d="M12 8a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPlusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPlusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
