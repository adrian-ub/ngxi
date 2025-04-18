import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionWomanSharpIcon],svg[ion-woman-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M310.28 191.4h.05l7.66-2.3l36.79 122.6l46-13.8l-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12l-4.71-15.74l-.9-3H362l-2.51-8.45a44.84 44.84 0 0 0-43-32.08H195.24a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-.9 3l-4.71 15.74l-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16l46 13.8l36.76-122.6l7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51Z"></svg:path>`,
})
export class IonWomanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
