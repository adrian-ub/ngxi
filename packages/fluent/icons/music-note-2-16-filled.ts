import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote216FilledIcon],svg[fluent-music-note-2-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.21v5.058A2 2 0 1 0 13 12V1.925a.8.8 0 0 0-1.07-.754l-6.4 2.286A.8.8 0 0 0 5 4.21v7.057A2 2 0 1 0 6 13V7.351z"></svg:path>`,
})
export class FluentMusicNote216FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
