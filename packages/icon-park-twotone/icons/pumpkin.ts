import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePumpkinIcon],svg[icon-park-twotone-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPumpkin0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="40" height="26" x="4" y="14" fill="#555" rx="13"></svg:rect><svg:ellipse cx="24" cy="27" rx="8" ry="13"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 6h-3a3 3 0 0 0-3 3v5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPumpkin0)"></svg:path>`,
})
export class IconParkTwotonePumpkinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
