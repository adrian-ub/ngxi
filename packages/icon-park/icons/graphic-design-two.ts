import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicDesignTwoIcon],svg[icon-park-graphic-design-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.6496 28.2381C12.221 25.6863 10 21.6025 10 17C10 9.26801 16.268 3 24 3C31.732 3 38 9.26801 38 17C38 21.5352 35.8435 25.5668 32.5 28.1252"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 17L44 44H4L24 17Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkGraphicDesignTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
