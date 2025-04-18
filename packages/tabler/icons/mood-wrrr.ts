import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodWrrrIcon],svg[tabler-mood-wrrr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:path d="m8 16l1-1l1.5 1l1.5-1l1.5 1l1.5-1l1 1m-7.5-4.5L10 10L8.5 8.5m7 3L14 10l1.5-1.5"></svg:path></svg:g>`,
})
export class TablerMoodWrrrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
