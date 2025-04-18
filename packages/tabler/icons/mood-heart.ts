import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodHeartIcon],svg[tabler-mood-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-8.012 8.946M9 10h.01M15 10h.01"></svg:path><svg:path d="M9.5 15a3.6 3.6 0 0 0 2.774.99m6.72 5.51l2.518-2.58a1.74 1.74 0 0 0 .004-2.413a1.627 1.627 0 0 0-2.346-.005l-.168.172l-.168-.172a1.627 1.627 0 0 0-2.346-.004a1.74 1.74 0 0 0-.004 2.412z"></svg:path></svg:g>`,
})
export class TablerMoodHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
