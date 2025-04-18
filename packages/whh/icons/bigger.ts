import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBiggerIcon],svg[whh-bigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960.56 685l-896 330q-27 15-45.5 6T.56 985V856q0-27 18.5-56t45.5-44l661-244l-661-244q-27-14-45.5-43.5T.56 169V39q0-27 18.5-35.5t45.5 6.5l896 330q26 15 45 44t19 56v145q0 27-19 56t-45 44"></svg:path>`,
})
export class WhhBiggerIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
