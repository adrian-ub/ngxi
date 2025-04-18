import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNoteOff2SolidIcon],svg[streamline-music-note-off-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22L3.9 2.838c.158-.187.37-.322.607-.387L12.083.35a1.217 1.217 0 0 1 1.534 1.168v7.185a2.46 2.46 0 0 1-1.437 2.416l1.6 1.602a.75.75 0 1 1-1.06 1.06zm8.697 6.577A2.463 2.463 0 0 1 12.13 6.61V4.153L6.731 5.67l2.186 2.186ZM3.61 9.06V6.243L5.097 7.73v3.42a2.463 2.463 0 1 1-1.488-2.09Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMusicNoteOff2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
