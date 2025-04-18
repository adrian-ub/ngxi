import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherPenToolIcon],svg[feather-pen-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 19l7-7l3 3l-7 7z"></svg:path><svg:path d="m18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.586 7.586"></svg:path><svg:circle cx="11" cy="11" r="2"></svg:circle></svg:g>`,
})
export class FeatherPenToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
