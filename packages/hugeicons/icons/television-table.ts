import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTelevisionTableIcon],svg[hugeicons-television-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14H6c-2.482 0-3 .518-3 3v2c0 2.482.518 3 3 3h12c2.482 0 3-.518 3-3v-2c0-2.482-.518-3-3-3M7 18h1m8 0h1M6 7V6c0-1.886 0-2.828.586-3.414S8.114 2 10 2h4c1.886 0 2.828 0 3.414.586S18 4.114 18 6v1c0 1.886 0 2.828-.586 3.414S15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586S6 8.886 6 7m4.5 4l-.5 3m3.5-3l.5 3m-2 0v8" color="currentColor"></svg:path>`,
})
export class HugeiconsTelevisionTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
