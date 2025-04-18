import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPresentationFileIcon],svg[carbon-presentation-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H7V6h18Z"></svg:path>`,
})
export class CarbonPresentationFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
