import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList4SolidIcon],svg[streamline-play-list-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm4.954 3.146v4.848a.46.46 0 0 0 .696.392L9.8 7.463a.46.46 0 0 0 0-.797L5.65 4.254a.46.46 0 0 0-.696.392" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
