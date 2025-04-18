import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockPlayIcon],svg[tabler-clock-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 7v5l2 2m3 8l5-3l-5-3z"></svg:path><svg:path d="M13.017 20.943a9 9 0 1 1 7.831-7.292"></svg:path></svg:g>`,
})
export class TablerClockPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
