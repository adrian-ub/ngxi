import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsFilmFrameIcon],svg[pepicons-film-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-17Zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5Zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5Zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5Zm1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5Zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5Zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5Zm2 2v-11h7v11h-7Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsFilmFrameIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
