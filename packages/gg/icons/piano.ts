import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPianoIcon],svg[gg-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM11 5H8.985v8h-1v6H12v-6h-1zm7.015 14H22V5h-2.985v8h-1zm-1-6h-1V5H14v8h-1v6h4.015zm-10.03 6v-6h-1V5H3v14z" clip-rule="evenodd"></svg:path>`,
})
export class GgPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
