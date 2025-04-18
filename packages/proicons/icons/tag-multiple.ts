import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTagMultipleIcon],svg[proicons-tag-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.828 9.629l-5.48-5.492a3.02 3.02 0 0 0-2.196-.886l-4.324.086a2.52 2.52 0 0 0-2.467 2.472l-.086 4.334a3.03 3.03 0 0 0 .884 2.2l5.48 5.493a3.016 3.016 0 0 0 4.273 0l3.916-3.925a3.03 3.03 0 0 0 0-4.282"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.25 15.714l4.254 4.262a6.03 6.03 0 0 0 8.544 0l3.202-3.209"></svg:path><svg:path fill="currentColor" d="M7.967 5.798a1.15 1.15 0 1 1 .002 2.298a1.15 1.15 0 0 1-.002-2.298"></svg:path></svg:g>`,
})
export class ProiconsTagMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
