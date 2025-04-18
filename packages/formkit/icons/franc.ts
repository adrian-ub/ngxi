import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitFrancIcon],svg[formkit-franc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path><svg:path fill="currentColor" d="M6.5 12.12c-.28 0-.5-.22-.5-.5V4.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5H7v6.62c0 .28-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M8.62 11H5.37c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.25c.28 0 .5.22.5.5s-.22.5-.5.5m.88-3H6.62c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9.5c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class FormkitFrancIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
