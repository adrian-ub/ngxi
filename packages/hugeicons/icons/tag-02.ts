import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTag02Icon],svg[hugeicons-tag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.736 11.687c-.953 1.064-.974 2.67-.1 3.8a32.3 32.3 0 0 0 5.878 5.876c1.13.875 2.735.855 3.8-.098a88 88 0 0 0 8.09-8.263c.252-.294.41-.654.445-1.04c.157-1.706.479-6.62-.856-7.955s-6.25-1.013-7.955-.856a1.85 1.85 0 0 0-1.04.446a88 88 0 0 0-8.262 8.09M7.5 14.5l2 2M18 6l4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsTag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
