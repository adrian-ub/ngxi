import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotepadBoldIcon],svg[ph-notepad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 124a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-112v160a36 36 0 0 1-36 36H72a36 36 0 0 1-36-36V40a12 12 0 0 1 12-12h24v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h24a12 12 0 0 1 12 12m-24 12h-12v4a12 12 0 0 1-24 0v-4h-20v4a12 12 0 0 1-24 0v-4H96v4a12 12 0 0 1-24 0v-4H60v148a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhNotepadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
