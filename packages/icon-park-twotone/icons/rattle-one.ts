import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRattleOneIcon],svg[icon-park-twotone-rattle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRattleOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="29.463" cy="16.989" r="11" fill="#555" transform="rotate(40 29.463 16.989)"></svg:circle><svg:path d="M38.533 23.293s-5.636.493-10.998-4.006S21.68 9.152 21.68 9.152m5.186 18.711c-3.46 1.012-5.068 2.928-6.675 4.843s-1.682 5.115-3.61 7.414s-4.746 2.544-7.044.616s-2.545-4.746-.617-7.044c1.929-2.298 5.068-2.928 6.675-4.843s3.214-3.83 3.61-7.414M38.832 10.49a3 3 0 0 0-4.596-3.856"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRattleOne0)"></svg:path>`,
})
export class IconParkTwotoneRattleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
