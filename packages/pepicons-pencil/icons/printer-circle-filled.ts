import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPrinterCircleFilledIcon],svg[pepicons-pencil-printer-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPrinterCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#fff" d="M7.5 5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4.5h-11z"></svg:path><svg:path fill="#000" d="M8 9.5H7V5.1c0-.866.612-1.6 1.417-1.6h9.166c.805 0 1.417.734 1.417 1.6v4.4h-1V5.1c0-.35-.209-.6-.417-.6H8.417c-.208 0-.417.25-.417.6z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M19 9H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3M5 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M18.5 20.531a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V14.97h11z"></svg:path><svg:path fill="#000" d="M18 14.969h1v5.25c0 .97-.588 1.812-1.417 1.812H8.417C7.588 22.031 7 21.19 7 20.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z"></svg:path><svg:path fill="#000" d="M16.5 18.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPrinterCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPrinterCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
