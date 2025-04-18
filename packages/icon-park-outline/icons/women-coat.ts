import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWomenCoatIcon],svg[icon-park-outline-women-coat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 10c4-1 7-6 7-6h10s3 5.2 7 6l6 21h-8v13H14V31H6z"></svg:path><svg:path d="m19 4l5 14l5-14m-5 14v26"></svg:path></svg:g>`,
})
export class IconParkOutlineWomenCoatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
