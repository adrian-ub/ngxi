import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitPoundIcon],svg[formkit-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path><svg:path fill="currentColor" d="M10.5 12h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5m-2-3h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M6.5 12c-.28 0-.5-.22-.5-.5V6.62C6 5.17 7.18 4 8.62 4c.7 0 1.36.27 1.85.77l.38.38c.2.2.2.51 0 .71s-.51.2-.71 0l-.38-.38c-.31-.31-.71-.47-1.15-.47c-.89 0-1.62.73-1.62 1.62v4.88c0 .28-.22.5-.5.5Z"></svg:path>`,
})
export class FormkitPoundIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
