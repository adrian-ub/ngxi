import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltDuotoneLightIcon],svg[lets-icons-book-open-alt-duotone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M21 19V6s-1-2-4.5-2S12 7 12 7s-1-3-4.5-3S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2s1-2 4.5-2s4.5 2 4.5 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 6.5v12m8.5-12v12m-17-12v12"></svg:path></svg:g>`,
})
export class LetsIconsBookOpenAltDuotoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
