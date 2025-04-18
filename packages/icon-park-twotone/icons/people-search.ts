import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePeopleSearchIcon],svg[icon-park-twotone-people-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPeopleSearch0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="M27 28h-8.2c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8V42h21m13-1l-3.172-3.171"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M38 35a4 4 0 0 1-1.172 2.828A4 4 0 1 1 38 35"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPeopleSearch0)"></svg:path>`,
})
export class IconParkTwotonePeopleSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
