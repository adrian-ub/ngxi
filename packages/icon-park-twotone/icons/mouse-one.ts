import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMouseOneIcon],svg[icon-park-twotone-mouse-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMouseOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="24" height="32" x="12" y="12" rx="12"></svg:rect><svg:path fill="#555" d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12v1H12z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 25V12c0-4 1.5-8 7-8c6 0 8 5 8 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMouseOne0)"></svg:path>`,
})
export class IconParkTwotoneMouseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
