import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGolfCourseIcon],svg[material-symbols-light-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.502 20.5q-.415 0-.709-.291t-.293-.707t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293m-9.5 1q-2.29 0-3.896-.434Q4.5 20.633 4.5 20q0-.485 1.094-.865t2.368-.5v1.48H9.5V2.809L15.885 5.9L10.5 8.692v9.82q2.15.124 3.575.526T15.5 20q0 .633-1.604 1.066q-1.603.434-3.894.434"></svg:path>`,
})
export class MaterialSymbolsLightGolfCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
