import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentDecreaseSolidIcon],svg[teenyicons-indent-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H3V3h12zM1.207 7.5l1.647-1.646l-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2l.708-.708zM15 8H7V7h8zm0 4H3v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsIndentDecreaseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
