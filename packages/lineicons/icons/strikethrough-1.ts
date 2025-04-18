import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsStrikethrough1Icon],svg[lineicons-strikethrough-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7.05A5.05 5.05 0 0 1 10.05 2h8.45a.75.75 0 0 1 0 1.5h-8.45a3.55 3.55 0 0 0-2.306 6.25H5.782A5.04 5.04 0 0 1 5 7.05m12.256 7.2h1.962A5.05 5.05 0 0 1 14.95 22H6.5a.75.75 0 0 1 0-1.5h8.45a3.55 3.55 0 0 0 2.306-6.25m-11.506-3a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsStrikethrough1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
