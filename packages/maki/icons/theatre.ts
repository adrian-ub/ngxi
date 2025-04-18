import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTheatreIcon],svg[maki-theatre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1S1 1 1 2v5.158C1 8.888 1.354 11 4.5 11H5V8L2.5 9s0-2.5 2.5-2.5V5c0-.708.087-1.32.5-1.775c.381-.42 1.005-1.258 2.656-.471L9 3.303V2s0-1-1-1c-.708 0-1.978 1-3 1S2.787 1 2 1m1 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 1S6 4 6 5v5c0 2 1 4 4 4s4-2 4-4V5c0-1-1-1-1-1c-.708 0-1.978 1-3 1S7.787 4 7 4m1 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4.5 4h5s0 2.5-2.5 2.5S7.5 10 7.5 10"></svg:path>`,
})
export class MakiTheatreIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
