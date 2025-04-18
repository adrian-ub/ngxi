import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSkypeIcon],svg[tabler-brand-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1-5.953 5.953A9 9 0 0 1 3.397 9.35A4.5 4.5 0 0 1 9.35 3.396A9 9 0 0 1 12 3"></svg:path><svg:path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4-1.187 4-2.5c0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5"></svg:path></svg:g>`,
})
export class TablerBrandSkypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
