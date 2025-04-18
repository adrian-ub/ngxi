import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGraphicDesignTwoIcon],svg[icon-park-twotone-graphic-design-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGraphicDesignTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.65 28.238A13.98 13.98 0 0 1 10 17c0-7.732 6.268-14 14-14s14 6.268 14 14c0 4.535-2.157 8.567-5.5 11.125"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="m24 17l20 27H4z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGraphicDesignTwo0)"></svg:path>`,
})
export class IconParkTwotoneGraphicDesignTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
