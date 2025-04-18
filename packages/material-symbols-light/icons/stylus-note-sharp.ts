import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusNoteSharpIcon],svg[material-symbols-light-stylus-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.873 18.462q-1.961-.125-2.975-.935t-1.014-2.233q0-1.413 1.213-2.291t3.376-1.078q1.206-.113 1.809-.476q.603-.362.603-.999q0-.823-.738-1.273t-2.399-.638l.098-.981q2.037.238 3.038.95q1 .713 1 1.942q0 1.056-.866 1.7t-2.472.775q-1.83.164-2.746.751t-.915 1.618q0 .99.729 1.513q.728.522 2.282.655zm6.618-.616l-2.722-2.721l9.397-9.396l2.726 2.721zm-.65.604l-3.374.704l.692-3.385z"></svg:path>`,
})
export class MaterialSymbolsLightStylusNoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
