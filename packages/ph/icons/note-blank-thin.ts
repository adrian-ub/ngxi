import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankThinIcon],svg[ph-note-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h108.69a11.93 11.93 0 0 0 8.48-3.51l51.32-51.32a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12M44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v108h-52a4 4 0 0 0-4 4v52H48a4 4 0 0 1-4-4m120-1.66V164h42.35Z"></svg:path>`,
})
export class PhNoteBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
