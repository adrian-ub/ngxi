import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLetterOpenCircleFilledIcon],svg[pepicons-pencil-letter-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLetterOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.5 11a.5.5 0 0 1 .5.5V20h14v-8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5"></svg:path><svg:path d="M6 8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 6 13.17zM7 9v3.902l6 3.997l6-3.997V9z"></svg:path><svg:path d="M12.723 5.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L13 6.101L8.777 8.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM9.75 11a.25.25 0 0 1 .25-.25h6a.25.25 0 1 1 0 .5h-6a.25.25 0 0 1-.25-.25m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLetterOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLetterOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
