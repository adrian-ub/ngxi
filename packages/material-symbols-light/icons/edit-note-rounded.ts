import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditNoteRoundedIcon],svg[material-symbols-light-edit-note-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 14q-.213 0-.356-.144T5 13.499t.144-.356T5.5 13h6q.213 0 .356.144t.144.357t-.144.356T11.5 14zm0-4q-.213 0-.356-.144T5 9.499t.144-.356T5.5 9h10q.213 0 .356.144t.144.357t-.144.356T15.5 10zm0-4q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5h10q.213 0 .356.144t.144.357t-.144.356T15.5 6zm7.73 12.192V17.12q0-.153.057-.296q.055-.144.186-.275l5.09-5.065q.149-.13.306-.19t.315-.062q.172 0 .338.064q.166.065.301.194l.925.944q.123.148.188.308q.064.159.064.319t-.052.322t-.2.31l-5.065 5.066q-.131.13-.275.186q-.143.056-.297.056h-1.073q-.343 0-.575-.232t-.232-.576m5.96-4.177l.925-.956l-.925-.944l-.95.95zm-5.075 4.1h.95l3.467-3.473l-.47-.475l-.455-.488l-3.492 3.486zm0 0v-.95l3.492-3.486l.925.963l-3.467 3.473z"></svg:path>`,
})
export class MaterialSymbolsLightEditNoteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
