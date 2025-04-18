import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCommentsIcon],svg[icon-park-twotone-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTComments0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M33 38H22v-8h14v-8h8v16h-5l-3 3z"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M4 6h32v24H17l-4 4l-4-4H4z"></svg:path><svg:path d="M12 22h6m-6-8h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTComments0)"></svg:path>`,
})
export class IconParkTwotoneCommentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
