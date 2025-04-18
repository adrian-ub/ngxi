import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStickynoteIcon],svg[whh-stickynote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 576q0 48-34 82L658 989q-34 34-82 34v1H0V0h1024v576zm-447 0v378q26-9 44-27l307-307q18-18 27-44z"></svg:path>`,
})
export class WhhStickynoteIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
