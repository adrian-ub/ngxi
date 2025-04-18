import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextItalicSlashIcon],svg[hugeicons-text-italic-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 20.001H5M3 3l18 18M19 7c0-.632 0-1.046-.08-1.323a2.05 2.05 0 0 0-1.166-1.3c-.265-.108-.566-.139-1.166-.2C15.17 4.03 13.388 4 12 4H8m4 0l-.8 3.2M8 20l2.4-9.6" color="currentColor"></svg:path>`,
})
export class HugeiconsTextItalicSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
