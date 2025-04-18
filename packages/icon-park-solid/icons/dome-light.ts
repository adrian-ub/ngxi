import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDomeLightIcon],svg[icon-park-solid-dome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24.778 8c-11.046 0-20 8.954-20 20h40c0-11.046-8.954-20-20-20"></svg:path><svg:path d="M24.778 4v4m0 30c-5.523 0-10-4.477-10-10h20c0 5.523-4.477 10-10 10m16.034.977l-2.068-2.954m-27.691.202l-2.55 2.55M34.778 42l-1.147-1.638m-17.72.112l-1.414 1.414"></svg:path></svg:g>`,
})
export class IconParkSolidDomeLightIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
