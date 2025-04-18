import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteLightIcon],svg[ph-music-note-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75M88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34m114-114.06l-68-20.4V48.06l68 20.4Z"></svg:path>`,
})
export class PhMusicNoteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
