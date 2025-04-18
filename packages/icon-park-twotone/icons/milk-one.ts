import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMilkOneIcon],svg[icon-park-twotone-milk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMilkOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 22h26v22H6z"></svg:path><svg:path d="M14 38V28l5 6l5-6v10m18-18L30 10M20 6v6l10-2V4z"></svg:path><svg:path fill="#555" d="m32 22l10-2v21l-10 3z"></svg:path><svg:path d="M19.482 12L6 22h26z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMilkOne0)"></svg:path>`,
})
export class IconParkTwotoneMilkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
