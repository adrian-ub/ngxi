import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMailReviewIcon],svg[icon-park-solid-mail-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMailReview0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M44 24v16.818C44 42.023 43.105 43 42 43H6c-1.105 0-2-.977-2-2.182V24l20 13z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m4 23.784l10-6.892m30 6.892l-10-6.892"></svg:path><svg:path fill="#fff" stroke="#fff" d="M34 5H14v24.415a2 2 0 0 0 .91 1.677l8 5.2a2 2 0 0 0 2.18 0l8-5.2a2 2 0 0 0 .91-1.677z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 13h4m-4 6h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMailReview0)"></svg:path>`,
})
export class IconParkSolidMailReviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
