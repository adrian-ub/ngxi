import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHandshakeSharpIcon],svg[material-symbols-handshake-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.1 21.4l11.15-11.15l-8.5-8.5L12.7 3.8l5.9 5.9l-2.825 2.825L10.6 7.35l-6.275 6.3l1.4 1.4l5.325-5.325l.725.7l-5.3 5.35l1.4 1.4L13.2 11.85l.7.7l-5.325 5.325l1.4 1.4L15.3 13.95l.725.725L10.7 20zM3.525 13l7.05-7.05l5.175 5.175L17.175 9.7l-7.95-7.95L.75 10.225z"></svg:path>`,
})
export class MaterialSymbolsHandshakeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
