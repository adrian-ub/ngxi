import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowBottomLeftIcon],svg[icon-park-inner-shadow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 38C20.134 38 16.634 36.4329 14.1005 33.8996C11.567 31.366 10 27.866 10 24"></svg:path></svg:g>`,
})
export class IconParkInnerShadowBottomLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
