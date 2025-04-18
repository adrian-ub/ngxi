import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardExternalInputOutlineSharpIcon],svg[material-symbols-light-keyboard-external-input-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7zm-1 1V6h18v6.89q-.233-.188-.473-.322T20 12.311V7H4v10h8.042q-.011.125-.014.244t-.003.256t.003.256t.014.244zm5.23-3.77v1.54h4.062q.143-.422.337-.806t.44-.733zm-3-3v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm3 0v1.54h.316q.281-.2.587-.344t.636-.268v-.927zm3 0v.62q.116-.021.226-.032t.236-.01q.275 0 .542.034q.266.035.535.085v-.696zm-12-3v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm.462 12.559l-.688-.689l2.055-2.1h-4.867v-1h4.868l-2.056-2.1l.688-.688l3.289 3.288z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardExternalInputOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
