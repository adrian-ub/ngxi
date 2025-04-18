import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicCircleSolidIcon],svg[mynaui-music-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
