import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwentyIcon],svg[arcticons-twenty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.164 20.398a3.922 3.922 0 0 1 5.291-2.97c1.564.596 2.609 2.224 2.48 3.892c-.094 1.24-.693 2.376-1.666 2.967c-1.802 1.095-7.479 3.9-7.479 3.9l7.717 1.36m11.748-8.523l-7.469 7.864"></svg:path><svg:rect width="7.836" height="11.828" x="25.607" y="19.043" rx="3.918" ry="3.918" transform="rotate(10 29.525 24.956)"></svg:rect></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.052 10.548L12.578 5.527a1.75 1.75 0 0 0-2.03 1.421L5.527 35.422a1.75 1.75 0 0 0 1.421 2.03l28.474 5.021a1.75 1.75 0 0 0 2.03-1.421l5.021-28.474a1.75 1.75 0 0 0-1.421-2.03"></svg:path>`,
})
export class ArcticonsTwentyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
