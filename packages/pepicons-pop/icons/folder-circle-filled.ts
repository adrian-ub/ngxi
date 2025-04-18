import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderCircleFilledIcon],svg[pepicons-pop-folder-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFolderCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M18.5 8h-4.991l-.565-.988A3 3 0 0 0 10.34 5.5H7.5a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492a1 1 0 0 0 .869.504H18.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFolderCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFolderCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
