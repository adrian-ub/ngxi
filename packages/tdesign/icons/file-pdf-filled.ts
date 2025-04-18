import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilePdfFilledIcon],svg[tdesign-file-pdf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h2v-9.5h6.214c.276 0 .541.049.786.139V13.5h3.714c.591 0 1.13.224 1.536.593a2.28 2.28 0 0 1 1.536-.593H21V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-10.786 8H6.5v8h2v-3h1.714c.71 0 1.286-.576 1.286-1.286v-2.428c0-.71-.576-1.286-1.286-1.286M9.5 18h-1v-1h1zm6.214-3H12v8h3.714c.71 0 1.286-.576 1.286-1.286v-5.428c0-.71-.576-1.286-1.286-1.286M14 21v-4h1v4zm4.786-6c-.71 0-1.286.576-1.286 1.286V23h2v-3h2.667v-2H19.5v-1h2.667v-2z"></svg:path>`,
})
export class TdesignFilePdfFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
