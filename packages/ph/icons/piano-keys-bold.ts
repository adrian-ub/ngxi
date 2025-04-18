import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysBoldIcon],svg[ph-piano-keys-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M92 132V52h24v80Zm52 24v48h-32v-48Zm20-24h-24V52h24ZM52 52h16v92a12 12 0 0 0 12 12h8v48H52Zm152 152h-36v-48h8a12 12 0 0 0 12-12V52h16Z"></svg:path>`,
})
export class PhPianoKeysBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
