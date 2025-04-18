import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTagMinusIcon],svg[tabler-tag-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m18.898 16.102l.699-.699l.699-.699a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3v5.172a2 2 0 0 0 .586 1.414l7.71 7.71c.471.47 1.087.706 1.704.706M16 19h6"></svg:path></svg:g>`,
})
export class TablerTagMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
