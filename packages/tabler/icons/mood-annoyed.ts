import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodAnnoyedIcon],svg[tabler-mood-annoyed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:path d="M15 14c-2 0-3 1-3.5 2.05M9 10h-.01M15 10h-.01"></svg:path></svg:g>`,
})
export class TablerMoodAnnoyedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
