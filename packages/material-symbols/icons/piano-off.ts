import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPianoOffIcon],svg[material-symbols-piano-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L18.15 21H5q-.825 0-1.412-.587T3 19V5.85L1.375 4.225L2.8 2.8l18.4 18.4zM21 18.15l-2-2V5h-2v8.5q0 .125-.038.25t-.112.25L13 10.15V5h-2v3.15L5.85 3H19q.825 0 1.413.588T21 5zM5 19h3.25v-4.5H8q-.425 0-.712-.288T7 13.5V9.85l-2-2zm4.75 0h4.5v-1.9l-3.3-3.3q-.1.325-.362.513T10 14.5h-.25zm6 0h.4l-.4-.4z"></svg:path>`,
})
export class MaterialSymbolsPianoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
