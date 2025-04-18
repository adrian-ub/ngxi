import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFileDateIcon],svg[icon-park-twotone-file-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFileDate0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 4l10 10"></svg:path><svg:circle cx="24" cy="28" r="8" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 25v4h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFileDate0)"></svg:path>`,
})
export class IconParkTwotoneFileDateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
