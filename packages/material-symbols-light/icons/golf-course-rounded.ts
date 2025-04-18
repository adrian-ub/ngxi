import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGolfCourseRoundedIcon],svg[material-symbols-light-golf-course-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.502 20.5q-.415 0-.709-.291t-.293-.707t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293m-9.5 1q-2.29 0-3.896-.434Q4.5 20.633 4.5 20q0-.485 1.094-.865t2.368-.5v.711q0 .31.22.54q.222.23.549.23q.31 0 .54-.23q.229-.23.229-.54V4.1q0-.47.379-.704t.783-.023l3.772 1.826q.457.217.466.726t-.444.727L10.5 8.692v9.82q2.15.124 3.575.526T15.5 20q0 .633-1.604 1.066q-1.603.434-3.894.434"></svg:path>`,
})
export class MaterialSymbolsLightGolfCourseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
