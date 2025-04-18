import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusNoteOutlineIcon],svg[material-symbols-light-stylus-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.898 17.017l8.24-8.24q.135-.135.135-.327t-.134-.327l-.647-.646q-.134-.135-.326-.135q-.193 0-.327.135l-8.241 8.24zm-6.025 1.445q-1.961-.125-2.975-.935q-1.013-.81-1.013-2.233q0-1.413 1.212-2.291q1.213-.878 3.376-1.078q1.206-.113 1.809-.476q.603-.362.603-.999q0-.823-.738-1.273t-2.399-.638l.098-.981q2.037.238 3.038.95q1 .713 1 1.942q0 1.056-.866 1.7t-2.472.775q-1.83.164-2.746.751t-.915 1.618q0 .99.729 1.513q.728.522 2.282.655zm6.02-.018L9.17 15.723l9.127-9.108q.385-.384.88-.375t.88.375l.942.943q.385.384.385.889t-.385.89zM9.186 19q-.252.062-.443-.129q-.19-.19-.128-.442l.555-2.706l2.721 2.721z"></svg:path>`,
})
export class MaterialSymbolsLightStylusNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
