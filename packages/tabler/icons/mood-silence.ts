import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodSilenceIcon],svg[tabler-mood-silence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18M9 10h-.01M15 10h-.01M8 15h8m-7-1v2m3-2v2m3-2v2"></svg:path>`,
})
export class TablerMoodSilenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
