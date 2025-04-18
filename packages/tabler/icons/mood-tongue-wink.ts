import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodTongueWinkIcon],svg[tabler-mood-tongue-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01"></svg:path><svg:path d="M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7m8.5-4c-.5-1-2.5-1-3 0"></svg:path></svg:g>`,
})
export class TablerMoodTongueWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
