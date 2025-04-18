import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGoogleFitIcon],svg[tabler-brand-google-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.866L9.267 6.132A3.866 3.866 0 0 0 3.8 11.599l2.733 2.734L12 19.8l8.202-8.201a3.866 3.866 0 0 0-5.469-5.466l-8.201 8.2"></svg:path>`,
})
export class TablerBrandGoogleFitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
