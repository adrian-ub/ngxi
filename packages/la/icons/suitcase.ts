import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSuitcaseIcon],svg[la-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3c-1.094 0-2 .906-2 2v1H9V5H7v1H5c-1.094 0-2 .906-2 2v16c0 1.094.906 2 2 2h22c1.094 0 2-.906 2-2V8c0-1.094-.906-2-2-2h-2V5h-2v1h-3V5c0-1.094-.906-2-2-2zm0 2h4v1h-4zM5 8h22v16h-2V9h-2v15H9V9H7v15H5z"></svg:path>`,
})
export class LaSuitcaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
