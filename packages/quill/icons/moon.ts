import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillMoonIcon],svg[quill-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.294 5A11.19 11.19 0 1 0 27 18.706s-5.723 2.19-10.81-2.897C11.105 10.723 13.295 5 13.295 5"></svg:path>`,
})
export class QuillMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
