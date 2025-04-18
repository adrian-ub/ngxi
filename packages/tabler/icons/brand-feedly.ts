import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandFeedlyIcon],svg[tabler-brand-feedly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.833 12.278l4.445-4.445M10.055 14.5l2.223-2.222m0 4.444l.555-.555m6.995-1.339a4 4 0 0 0 0-5.656l-5-5a4 4 0 0 0-5.656 0l-5 5a4 4 0 0 0 0 5.656L10.343 21h3.314z"></svg:path>`,
})
export class TablerBrandFeedlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
