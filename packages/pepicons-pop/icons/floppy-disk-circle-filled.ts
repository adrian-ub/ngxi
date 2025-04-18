import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFloppyDiskCircleFilledIcon],svg[pepicons-pop-floppy-disk-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFloppyDiskCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 6.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L20.914 7.5a2 2 0 0 1 .586 1.414V19.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V8.914L17.086 6.5z"></svg:path><svg:path d="M8 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7h-6v7H8zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a1 1 0 1 0-2 0v2h-4V6a1 1 0 0 0-2 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFloppyDiskCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFloppyDiskCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
