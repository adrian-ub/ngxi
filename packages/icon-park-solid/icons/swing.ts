import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwingIcon],svg[icon-park-solid-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 36c-2-3.5-2.001-10-2-19c0-3 4-4 6-1c1.107 1.662 1.816 6.264 1.816 6.264l6.495-11.25a2.52 2.52 0 1 1 4.365 2.52l.388-.67a2.52 2.52 0 1 1 4.366 2.52l-.388.671a2.52 2.52 0 1 1 4.365 2.52l-1.552 2.69a2.523 2.523 0 0 1 4.373 2.518l-9.17 15.962c-.097.17-.197.337-.32.489C28.167 40.94 26.143 43 22 43c-4.66 0-9.522-2.661-12-7"></svg:path><svg:path d="M37 5c1.379.733 3.505 1.758 5 4c1 1.5 1.5 3.5 1.79 6"></svg:path></svg:g>`,
})
export class IconParkSolidSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
