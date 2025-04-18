import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkH2Icon],svg[icon-park-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42"></svg:path></svg:g>`,
})
export class IconParkH2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
