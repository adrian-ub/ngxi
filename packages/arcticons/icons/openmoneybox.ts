import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenmoneyboxIcon],svg[arcticons-openmoneybox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.7 23.25v-7.12a2 2 0 0 1 2-2h32.8a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H8.7a2 2 0 0 1-2-2V32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 23.25H17a2 2 0 0 1 2 2V30a2 2 0 0 1-2 2H5.5a1 1 0 0 1-1-1v-6.75a1 1 0 0 1 1-1"></svg:path><svg:circle cx="14.49" cy="27.63" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.12 14.13L13.19 6.87l-2.11 7.26"></svg:path>`,
})
export class ArcticonsOpenmoneyboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
