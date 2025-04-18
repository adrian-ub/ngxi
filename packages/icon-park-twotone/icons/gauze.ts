import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGauzeIcon],svg[icon-park-twotone-gauze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGauze0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="26" cy="24" r="17" fill="#555"></svg:circle><svg:circle cx="26" cy="24" r="7" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 41h21"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGauze0)"></svg:path>`,
})
export class IconParkTwotoneGauzeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
