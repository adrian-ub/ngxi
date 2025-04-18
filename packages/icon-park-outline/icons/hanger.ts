import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHangerIcon],svg[icon-park-outline-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.73 27.126a6 6 0 0 1 6.54 0l15.55 10.107A2.593 2.593 0 0 1 41.407 42H6.593a2.593 2.593 0 0 1-1.413-4.767z" clip-rule="evenodd"></svg:path><svg:path d="M24 25s6-8.686 6-12a6 6 0 0 0-12 0"></svg:path></svg:g>`,
})
export class IconParkOutlineHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
