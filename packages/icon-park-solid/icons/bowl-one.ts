import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBowlOneIcon],svg[icon-park-solid-bowl-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M24 39c9.389 0 17-7.059 17-17H7c0 9.941 7.611 17 17 17"></svg:path><svg:path stroke-linejoin="round" d="m18 38l-2 6h16l-2-6"></svg:path><svg:path d="M12 10v4m24-4v4M24 5v9"></svg:path></svg:g>`,
})
export class IconParkSolidBowlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
