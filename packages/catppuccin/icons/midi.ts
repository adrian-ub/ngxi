import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMidiIcon],svg[catppuccin-midi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5"><svg:path d="M5.1 1.3a7.5 7.5 0 1 0 5.8 0c-.7-.3-1.4.3-1.4 1c0 .2-.2.4-.5.4H7a.5.5 0 0 1-.5-.5c0-.6-.7-1.2-1.4-.9Z"></svg:path><svg:path d="M5.5 11.7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm6 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM4 9.2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm9 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-4.5 4a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path></svg:g>`,
})
export class CatppuccinMidiIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
