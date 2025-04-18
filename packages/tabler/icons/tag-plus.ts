import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTagPlusIcon],svg[tabler-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M21.002 13a2.4 2.4 0 0 0-.706-1.704l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3v5.172a2 2 0 0 0 .586 1.414l7.71 7.71c.471.47 1.087.706 1.704.706M16 19h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerTagPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
