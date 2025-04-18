import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSkateIcon],svg[icon-park-twotone-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSkate0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M44 39.82H4l32.54-18H44z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M3.857 19.201L7.09 20.8l17.321-10l.232-3.598"></svg:path><svg:path fill="#fff" d="M12.33 24.88a3 3 0 1 0 0-6a3 3 0 0 0 0 6m11.12-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSkate0)"></svg:path>`,
})
export class IconParkTwotoneSkateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
