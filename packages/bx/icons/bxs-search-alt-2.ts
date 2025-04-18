import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsSearchAlt2Icon],svg[bx-bxs-search-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 16c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604l-1.392-1.358a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.967 6.967 0 0 0 16 9c0-3.859-3.141-7-7-7S2 5.141 2 9s3.141 7 7 7z" fill="currentColor"></svg:path>`,
})
export class BxBxsSearchAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
