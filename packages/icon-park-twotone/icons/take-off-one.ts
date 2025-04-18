import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTakeOffOneIcon],svg[icon-park-twotone-take-off-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTakeOffOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.997 40.988h38"></svg:path><svg:path fill="#555" d="m8.52 31.264l-4.612-7.99c.97-.56 5.771 1.115 7.559 2.032l9.702-3.473l-8.296-14.368l4.115-.247l13.4 12.462l8.25-2.612c3.655-1.045 4.807.95 5.037 1.35c1.383 2.394-1.411 4.007-1.81 4.238c-3.193 1.843-33.344 8.608-33.344 8.608"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTakeOffOne0)"></svg:path>`,
})
export class IconParkTwotoneTakeOffOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
