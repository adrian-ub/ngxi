import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneThumbsUpIcon],svg[icon-park-twotone-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTThumbsUp0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14z"></svg:path><svg:path fill="#555" d="M15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.16 4.16 0 0 0 4.194 3.6H15z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTThumbsUp0)"></svg:path>`,
})
export class IconParkTwotoneThumbsUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
