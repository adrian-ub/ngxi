import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineDottedIcon],svg[lineicons-line-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.252 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m7.399 0a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m2.799.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m-6.499-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m10.199.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4.6-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8"></svg:path>`,
})
export class LineiconsLineDottedIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
