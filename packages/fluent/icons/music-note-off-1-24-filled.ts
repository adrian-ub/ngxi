import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMusicNoteOff124FilledIcon],svg[fluent-music-note-off-1-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.06l8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.317a4 4 0 1 0 1.476 3.56a.8.8 0 0 0 .024-.187zm6.987-1.608l-6.964-2.611L10.5 7.318V2.75a.75.75 0 0 1 1.013-.702l6.378 2.391A3.25 3.25 0 0 1 20 7.483v3.267a.75.75 0 0 1-1.013.702"></svg:path>`,
})
export class FluentMusicNoteOff124FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
