import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltLightIcon],svg[lets-icons-book-open-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M12 6.5v12m8.5-12v12m-17-12v12m17 0s-1-2-4.5-2s-4 2-4 2m-8.5 0s1-2 4.5-2s4 2 4 2m8.5-12s-1-2-4.5-2s-4 2-4 2m-8.5 0s1-2 4.5-2s4 2 4 2"></svg:path>`,
})
export class LetsIconsBookOpenAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
