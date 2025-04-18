import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellLightIcon],svg[lets-icons-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.448 8.97a5.586 5.586 0 0 1 11.104 0l.252 2.266l.006.057a8 8 0 0 0 1.074 3.18l.03.05l.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964l.03-.05a8 8 0 0 0 1.073-3.179l.006-.057z"></svg:path><svg:path stroke-linecap="round" d="M9.102 18.406c.171.744.548 1.402 1.072 1.87c.524.47 1.166.724 1.826.724s1.302-.254 1.826-.723c.524-.47.9-1.127 1.072-1.871"></svg:path></svg:g>`,
})
export class LetsIconsBellLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
