import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPrinterSolidBadgedIcon],svg[clarity-printer-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 12.88a7.3 7.3 0 0 1-4 .55V15h-2v-2h.32a7.52 7.52 0 0 1-4.18-4H11V7h11.57a7.5 7.5 0 0 1-.07-1a8 8 0 0 1 .07-1H9v4H7a4 4 0 0 0-4 4v11h6v8h18v-8h6zM25 24v6H11V19h14Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPrinterSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
