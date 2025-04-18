import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBlankNotepadIcon],svg[streamline-blank-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 3.5v-3m3 3v-3m3 3v-3M12.5 2h-11a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBlankNotepadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
