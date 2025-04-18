import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddColumnRightIcon],svg[material-symbols-light-add-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V4h7.558v16zm8.558 0V4H19v3.139q-.125-.012-.244-.018t-.256-.005q-2.027 0-3.456 1.416T13.616 12t1.428 3.468t3.456 1.416q.134 0 .25-.015t.25-.027V20zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddColumnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
