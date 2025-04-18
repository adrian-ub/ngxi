import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMatchesIcon],svg[hugeicons-matches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8H9c-1.886 0-2.828 0-3.414.586S5 10.114 5 12v6c0 1.886 0 2.828.586 3.414S7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586S19 19.886 19 18v-6c0-1.886 0-2.828-.586-3.414S16.886 8 15 8m3 0V6c0-1.886 0-2.828-.586-3.414S15.886 2 14 2h-4c-1.886 0-2.828 0-3.414.586S6 4.114 6 6v2m6 0V5M9 8V5m6 3V5"></svg:path><svg:path d="M12.154 19C13.726 19 15 17.746 15 16.2c0-2.295-2.44-2.8-2.44-5.2c-1.828 1-1.56 4-1.56 4s-1.69 0-1.69-1.5c-.948 2.5.357 5.5 2.844 5.5"></svg:path></svg:g>`,
})
export class HugeiconsMatchesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
