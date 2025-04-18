import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNewEfferentIcon],svg[icon-park-new-efferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19V13.3125V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H19"></svg:path><svg:path d="M34 24L42 32L34 40"></svg:path><svg:path d="M24 32H42"></svg:path></svg:g>`,
})
export class IconParkNewEfferentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
