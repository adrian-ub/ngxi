import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVideoFilledIcon],svg[tabler-video-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.117 7.625a1 1 0 0 0-.564.1L15 10v4l4.553 2.275A1 1 0 0 0 21 15.383V8.617a1 1 0 0 0-.883-.992"></svg:path><svg:path d="M5 5C3.355 5 2 6.355 2 8v8c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3z"></svg:path></svg:g>`,
})
export class TablerVideoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
