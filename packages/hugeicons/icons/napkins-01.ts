import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNapkins01Icon],svg[hugeicons-napkins-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.028 3.072a.28.28 0 0 0-.28.28v9.97c0 1.44 0 2.44.1 3.19c.1.74.28 1.12.56 1.4s.66.46 1.4.56c.76.1 1.76.1 3.19.1h7.91c.19 0 .34-.15.34-.34a.4.4 0 0 0-.08-.23l-.81-.93H9.008c-.41 0-.75-.34-.75-.75v-12l-1.01-1.15a.28.28 0 0 0-.21-.1zm2.72 2.98v9.52h8.3zm8.59 14.02h1.57c1.02 0 1.84-.82 1.84-1.84c0-.45-.16-.88-.45-1.21L8.378 2.182a1.778 1.778 0 0 0-3.12 1.17v1.7a1.784 1.784 0 0 0-3 1.3v10.02c0 1.37 0 2.47.12 3.34c.12.9.38 1.66.98 2.26s1.36.86 2.26.98c.87.12 1.97.12 3.34.12h7.96c1.02 0 1.84-.82 1.84-1.84c0-.42-.15-.83-.41-1.16zm-1.99 0h-4.41c-1.37 0-2.47 0-3.34-.12c-.9-.12-1.66-.38-2.26-.98s-.86-1.36-.98-2.26c-.12-.87-.12-1.97-.12-3.34v-6.05l-1.01-1.15a.28.28 0 0 0-.21-.1a.28.28 0 0 0-.28.28v9.97c0 1.44 0 2.44.1 3.19c.1.74.28 1.12.56 1.4s.66.46 1.4.56c.76.1 1.76.1 3.19.1h7.91c.19 0 .34-.15.34-.34a.4.4 0 0 0-.08-.23z" color="currentColor"></svg:path>`,
})
export class HugeiconsNapkins01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
