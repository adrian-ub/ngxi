import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJoinStraightIcon],svg[hugeicons-join-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h10c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-1c0-1.886 0-2.828-.586-3.414S19.886 13 18 13h-3c-1.886 0-2.828 0-3.414-.586S11 10.886 11 9V6c0-1.886 0-2.828-.586-3.414S8.886 2 7 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v10c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22" color="currentColor"></svg:path>`,
})
export class HugeiconsJoinStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
