import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayLessonIcon],svg[material-symbols-play-lesson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v7l2.5-1.5L12 11V4zm11 19q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-1.25-2.5l4-2.5l-4-2.5zM11 17.993q0 1.082.338 2.095T12.25 22H5q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h12q.825 0 1.413.588T19 4v7.05q-.251-.025-.503-.038T17.993 11q-2.918 0-4.955 2.038T11 17.993"></svg:path>`,
})
export class MaterialSymbolsPlayLessonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
