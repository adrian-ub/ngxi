import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingAdoreAltIcon],svg[cbi-ceiling-adore-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.09 8.26c-.51-1.35-3.49-2.39-7.11-2.39s-6.6 1.04-7.11 2.39c-2.01.75-3.27 1.82-3.27 3L1.59 13c0 2.27 4.65 4.12 10.39 4.12S22.37 15.28 22.37 13v-1.74c0-1.19-1.26-2.25-3.28-3m-7.11 7.92c-4.52 0-8.19-1.31-8.19-2.92s3.67-2.92 8.19-2.92s8.19 1.31 8.19 2.92s-3.66 2.92-8.19 2.92"></svg:path>`,
})
export class CbiCeilingAdoreAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
