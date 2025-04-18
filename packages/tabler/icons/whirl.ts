import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWhirlIcon],svg[tabler-whirl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10"></svg:path><svg:path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12"></svg:path><svg:path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3"></svg:path><svg:path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12"></svg:path></svg:g>`,
})
export class TablerWhirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
