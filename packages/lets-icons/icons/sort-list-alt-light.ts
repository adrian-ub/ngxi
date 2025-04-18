import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortListAltLightIcon],svg[lets-icons-sort-list-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M5 8v8"></svg:path><svg:path fill="currentColor" d="M5.224 4.447L6.71 7.421A.4.4 0 0 1 6.353 8H3.647a.4.4 0 0 1-.358-.579l1.487-2.974a.25.25 0 0 1 .448 0m0 15.106l1.487-2.974A.4.4 0 0 0 6.353 16H3.647a.4.4 0 0 0-.358.579l1.487 2.974a.25.25 0 0 0 .448 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M11 8h8m-8 4h8m-8 4h8"></svg:path></svg:g>`,
})
export class LetsIconsSortListAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
