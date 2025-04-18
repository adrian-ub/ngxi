import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuperlivePlusIcon],svg[arcticons-superlive-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect><svg:circle cx="23.958" cy="24" r="14.266"></svg:circle><svg:circle cx="24.042" cy="24.084" r="8.601"></svg:circle><svg:path d="M29.51 26.709a6.08 6.08 0 0 1-3.447 3.072m-7.899-7.928a6.2 6.2 0 0 1 6.335-4.091"></svg:path></svg:g>`,
})
export class ArcticonsSuperlivePlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
