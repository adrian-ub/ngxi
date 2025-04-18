import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBabyPantsIcon],svg[icon-park-solid-baby-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBabyPants0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M34 4H14c-2 1-5 5-5 15c0 12.5 5 25 8 25c2 0 2-2.5 2-2.5V24c0-5 8-4.5 8 0v11c0 8 7 11 9 9s-2-4-2-7c0-5 4-9 4-22c0-5-2.333-9-4-11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 12h27"></svg:path><svg:path stroke="#fff" d="M10.803 8c-.732 1.696-1.338 3.981-1.624 7M38 15a16.9 16.9 0 0 0-1.125-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBabyPants0)"></svg:path>`,
})
export class IconParkSolidBabyPantsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
