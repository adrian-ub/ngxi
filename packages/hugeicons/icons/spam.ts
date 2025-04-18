import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpamIcon],svg[hugeicons-spam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.31 3h-.62c-2.436 0-3.654 0-4.65.553c-.997.552-1.588 1.555-2.771 3.562l-.59 1C2.56 10.014 2 10.963 2 12s.56 1.986 1.68 3.885l.589 1c1.183 2.007 1.774 3.01 2.77 3.563c.997.552 2.215.552 4.65.552h.622c2.435 0 3.653 0 4.65-.552c.996-.553 1.587-1.556 2.77-3.563l.59-1C21.44 13.986 22 13.037 22 12s-.56-1.986-1.68-3.885l-.589-1c-1.183-2.007-1.774-3.01-2.77-3.562C15.964 3 14.746 3 12.31 3m-.318 13h.009m-.009-3V8" color="currentColor"></svg:path>`,
})
export class HugeiconsSpamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
