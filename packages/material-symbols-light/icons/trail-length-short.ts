import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrailLengthShortIcon],svg[material-symbols-light-trail-length-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16.5q-1.748 0-3.005-1.137T10.523 12.5H4.5v-1h6.023q.087-.806.51-1.623q.425-.818 1.217-1.377H6.5v-1H15q1.868 0 3.184 1.316Q19.5 10.13 19.5 11.997t-1.316 3.185T15 16.5m-7.5 0v-1h2v1z"></svg:path>`,
})
export class MaterialSymbolsLightTrailLengthShortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
