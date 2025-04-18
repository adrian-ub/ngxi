import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopKeyCircleFilledIcon],svg[pepicons-pop-key-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopKeyCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.718 15.307A1 1 0 0 0 16 14.61V12a5 5 0 1 0-6 0v8a3 3 0 1 0 6 0a1 1 0 0 0-.365-.772l-.226-.186l.088-.05a1 1 0 0 0 .503-.868v-.775a1 1 0 0 0-.292-.706l-.65-.653zm-1.75-3.558Q14 11.872 14 12v2.206l-1.063 1.098a1 1 0 0 0 .01 1.402l.915.917l-.703.402a1 1 0 0 0-.14 1.64l.897.738A1 1 0 0 1 12 20v-8q0-.13.031-.25a1 1 0 0 0-.483-1.124a3 3 0 1 1 2.904 0a1 1 0 0 0-.483 1.124"></svg:path><svg:path d="M13 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopKeyCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopKeyCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
