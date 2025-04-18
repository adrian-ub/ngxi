import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChiliIcon],svg[icon-park-twotone-chili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChili0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M21.168 16.594c1.648-5.607 8.323-7.928 13.093-4.552c4.126 2.918 4.818 8.766 1.488 12.567l-3.13 3.574a48.8 48.8 0 0 1-19.203 13.4l-3.558 1.369a2.339 2.339 0 0 1-2.294-4.014l2.78-2.208a25.8 25.8 0 0 0 8.705-12.927z"></svg:path><svg:path d="M29.842 10.684a4.931 4.931 0 1 1 7.768 5.39"></svg:path><svg:path stroke-linecap="round" d="m42 4l-4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChili0)"></svg:path>`,
})
export class IconParkTwotoneChiliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
