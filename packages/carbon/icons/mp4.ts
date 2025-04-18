import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMp4Icon],svg[carbon-mp4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10v8zm1-1h-2v8h-3V9h-2v10h5v4h2v-4h1v-2h-1zM14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4zM8 9l-1.51 5L6 15.98L5.54 14L4 9H2v14h2v-8l-.16-2l.58 2L6 19.63L7.58 15l.58-2L8 15v8h2V9z"></svg:path>`,
})
export class CarbonMp4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
