import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardExternalInputSharpIcon],svg[material-symbols-light-keyboard-external-input-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.23 11.23v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm3 0v1.54h1.54v-1.54zm-6-3v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm3 0v1.54h1.54V8.23zm.462 12.559l-.688-.689l2.055-2.1h-4.867v-1h4.868l-2.056-2.1l.688-.688l3.289 3.288zM3 18V6h18v6.89q-.496-.363-1.066-.6q-.57-.238-1.165-.363v-.696h-1.538v.622q-.39.028-.753.107q-.363.078-.709.198v-.927h-1.538v1.538h.315q-.44.296-.802.665t-.675.797H8.231v1.538h4.061q-.144.413-.205.848q-.062.435-.062.883q0 .138.003.256q.003.119.014.244z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardExternalInputSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
