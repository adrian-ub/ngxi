import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteBoldIcon],svg[ph-music-note-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184v-79.87l64.55 19.36A12 12 0 0 0 220 112V64a12 12 0 0 0-8.55-11.49M88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28M196 95.87l-56-16.8V56.13l56 16.8Z"></svg:path>`,
})
export class PhMusicNoteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
