import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSurroundWithIcon],svg[codicon-surround-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4h1V3H1.5l-.5.5v9l.5.5H3v-1H2zm12.5-1H13v1h1v8h-1v1h1.5l.5-.5v-9zM5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class CodiconSurroundWithIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
