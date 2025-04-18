import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNote124RegularIcon],svg[fluent-music-note-1-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.513 2.048a.75.75 0 0 0-1.013.702v12.127a4 4 0 1 0 1.476 3.56a.8.8 0 0 0 .024-.187V8.832l6.987 2.62A.75.75 0 0 0 20 10.75V7.483a3.25 3.25 0 0 0-2.109-3.044zM10.5 18a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m8-8.332L12 7.23V3.832l5.365 2.012A1.75 1.75 0 0 1 18.5 7.483z"></svg:path>`,
})
export class FluentMusicNote124RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
