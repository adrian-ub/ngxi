import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRecordSmallIcon],svg[codicon-record-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1 0a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class CodiconRecordSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
