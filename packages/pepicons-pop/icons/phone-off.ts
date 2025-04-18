import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPhoneOffIcon],svg[pepicons-pop-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12.52 10.192l-.581.582a31 31 0 0 1-2.827-2.83l.58-.58a3 3 0 0 0 0-4.243L8.278 1.707a3 3 0 0 0-4.242 0L1.23 4.513A1 1 0 0 0 1 5.57c2.374 6.36 6.818 10.834 13.308 13.312a1 1 0 0 0 1.064-.227l2.806-2.806a3 3 0 0 0 0-4.242l-1.415-1.415a3 3 0 0 0-4.242 0m4.244 2.829a1 1 0 0 1 0 1.414l-2.342 2.341c-5.424-2.23-9.173-6-11.317-11.31L5.45 3.12a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 0 1 0 1.414L7.044 7.184a1 1 0 0 0-.063 1.345a33 33 0 0 0 4.373 4.376a1 1 0 0 0 1.345-.063l1.236-1.235a1 1 0 0 1 1.414 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopPhoneOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
