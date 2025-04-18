import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStudyReadIcon],svg[carbon-study-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 29.414l-5-5.001L17.413 23L21 26.586L28.585 19L30 20.415l-9 8.999z" fill="currentColor"></svg:path><svg:path d="M20 14v-2h-5v-2h3V8h-3V6h-2v2h-3v2h3v2H8v2h5v2H8v2h5v2h-3v2h5v-4h3v-2h-3v-2h5z" fill="currentColor"></svg:path><svg:path d="M13 24H4V4h20v12h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h9z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyReadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
