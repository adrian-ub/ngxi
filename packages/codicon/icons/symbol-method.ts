import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolMethodIcon],svg[codicon-symbol-method-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.51 4l-5-3h-1l-5 3l-.49.86v6l.49.85l5 3h1l5-3l.49-.85v-6zm-6 9.56l-4.5-2.7V5.7l4.5 2.45zM3.27 4.7l4.74-2.84l4.74 2.84l-4.74 2.59zm9.74 6.16l-4.5 2.7V8.15l4.5-2.45z"></svg:path>`,
})
export class CodiconSymbolMethodIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
