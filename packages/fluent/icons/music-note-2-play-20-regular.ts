import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote2Play20RegularIcon],svg[fluent-music-note-2-play-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.702 2.226A1 1 0 0 1 16 3.18v6.027a5.5 5.5 0 0 0-1-.184V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955zM8 7.32l7-2.187V3.18L8 5.368zM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m13.5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.265-.436l-2.994-1.65a.5.5 0 0 0-.741.438v3.3a.5.5 0 0 0 .741.438l2.994-1.65a.5.5 0 0 0 0-.876"></svg:path>`,
})
export class FluentMusicNote2Play20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
