import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardExternalInputSharpIcon],svg[material-symbols-keyboard-external-input-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM5 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm1 14l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 15.4L18 14l4 4zM2 19V5h20v8.525q-.65-.575-1.412-.937T19 12.1V11h-2v1.1q-.275.05-.513.1t-.487.15V11h-2v2h.7q-.325.2-.6.463t-.55.537H8v2h4.35q-.175.475-.25.975T12.025 18q0 .275.013.513T12.1 19z"></svg:path>`,
})
export class MaterialSymbolsKeyboardExternalInputSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
