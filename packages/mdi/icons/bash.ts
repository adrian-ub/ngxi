import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBashIcon],svg[mdi-bash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H15v2h-1.9l-.2 2H15v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H5v-2h1.9l.2-2H5zm4.1 2l-.2 2h2l.2-2M19 6h-2v8h2m0 2h-2v2h2Z"></svg:path>`,
})
export class MdiBashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
