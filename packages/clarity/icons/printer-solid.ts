import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPrinterSolidIcon],svg[clarity-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 9h-2V5H9v4H7a4 4 0 0 0-4 4v11h6v8h18v-8h6V13a4 4 0 0 0-4-4m-4 15v6H11V19h14Zm0-15H11V7h14Zm4 6h-2v-2h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPrinterSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
