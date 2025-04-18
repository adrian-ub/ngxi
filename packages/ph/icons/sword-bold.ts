import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSwordBoldIcon],svg[ph-sword-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28h-64a12 12 0 0 0-9.33 4.45L79.5 110.51l-4.66-4.65a20 20 0 0 0-28.29 0l-16.69 16.69a20 20 0 0 0 0 28.29L45 166l-21.14 21.17a20 20 0 0 0 0 28.28l16.69 16.69a20 20 0 0 0 28.28 0L90 211l15.17 15.16a20 20 0 0 0 28.29 0l16.69-16.69a20 20 0 0 0 0-28.3l-4.65-4.65l78.06-63.17A12 12 0 0 0 228 104V40a12 12 0 0 0-12-12M54.69 212.34l-11-11L62 183l11 11Zm64.61-6L49.65 136.7l11.05-11l69.65 69.65ZM204 98.27l-75.58 61.17L121 152l47.51-47.5a12 12 0 0 0-17-17L104 135l-7.45-7.44L157.73 52H204Z"></svg:path>`,
})
export class PhSwordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
