import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNailPolishOneIcon],svg[icon-park-twotone-nail-polish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNailPolishOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="20" fill="#555" rx="2"></svg:rect><svg:path fill="#555" d="M17 4h14v16H17zm5 28h4l1 5h-6z"></svg:path><svg:path d="M24 20v12m7-12H17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNailPolishOne0)"></svg:path>`,
})
export class IconParkTwotoneNailPolishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
