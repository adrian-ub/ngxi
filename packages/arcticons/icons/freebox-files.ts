import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreeboxFilesIcon],svg[arcticons-freebox-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.065 36.026a6.474 6.474 0 1 1-12.948 0a6.474 6.474 0 0 1 12.948 0m-8.324 0h2.405"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.741 39.725v-7.399h3.7M8.6 42.5l13.947-27.972c2.47-4.955 9.052-11.01 16.852-8.4M11.587 18.119h20.194"></svg:path>`,
})
export class ArcticonsFreeboxFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
