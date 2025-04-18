import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPageBreak1Icon],svg[lineicons-page-break-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.781 9.749a2.25 2.25 0 0 1-2.25-2.25v-3.28a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.28a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75zm.75 14.531a2.25 2.25 0 0 1-2.25-2.25V16.5a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25zm-.75-2.25c0 .415.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V16.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.781 11.28a.75.75 0 0 0 0 1.5H7.47a.75.75 0 0 0 0-1.5zm5.063 0a.75.75 0 1 0 0 1.5h3.375a.75.75 0 0 0 0-1.5zm6.75 0a.75.75 0 1 0 0 1.5h1.687a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class LineiconsPageBreak1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
