import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDomeLightIcon],svg[icon-park-dome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24.7778 8C13.7321 8 4.77783 16.9543 4.77783 28H44.7778C44.7778 16.9543 35.8235 8 24.7778 8Z"></svg:path><svg:path d="M24.7778 4V8"></svg:path><svg:path d="M24.7778 38C19.255 38 14.7778 33.5228 14.7778 28H34.7778C34.7778 33.5228 30.3007 38 24.7778 38Z"></svg:path><svg:path d="M40.8118 38.9766L38.7437 36.0231"></svg:path><svg:path d="M11.0525 36.2251L8.50298 38.7746"></svg:path><svg:path d="M34.7778 42L33.6307 40.3617"></svg:path><svg:path d="M15.9114 40.4736L14.4972 41.8878"></svg:path></svg:g>`,
})
export class IconParkDomeLightIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
