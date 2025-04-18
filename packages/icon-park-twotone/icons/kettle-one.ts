import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneKettleOneIcon],svg[icon-park-twotone-kettle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTKettleOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 14h17s8 4.148 8 13.8c0 9.65-8 14.2-8 14.2H13s-7-6.022-7-14s7-14 7-14"></svg:path><svg:path d="M38 28c-13-3-19 6-32 0m25-14h9s4 4 4 16"></svg:path><svg:path fill="#555" d="m9 6l23 2.667L31 14H13z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTKettleOne0)"></svg:path>`,
})
export class IconParkTwotoneKettleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
