import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltIcon],svg[lets-icons-book-open-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6v13m9-13v13M3 6v13m18 0s-1-2-4.5-2s-4.5 2-4.5 2m0 0s-1-2-4.5-2S3 19 3 19M21 6s-1-2-4.5-2S12 6 12 6m0 0s-1-2-4.5-2S3 6 3 6"></svg:path>`,
})
export class LetsIconsBookOpenAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
