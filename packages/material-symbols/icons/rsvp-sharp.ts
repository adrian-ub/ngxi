import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRsvpSharpIcon],svg[material-symbols-rsvp-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V9h5v3.9h-.9L6 15H4.5l-.85-2H2.5v2zm6 0v-1.5h3v-.75H7V9h4.5v1.5h-3v.75h3V15zm7.25 0L12.5 9H14l1 3.425L16 9h1.5l-1.75 6zM18 15V9h5v4h-3.5v2zM2.5 11.5h2v-1h-2zm17 0h2v-1h-2z"></svg:path>`,
})
export class MaterialSymbolsRsvpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
