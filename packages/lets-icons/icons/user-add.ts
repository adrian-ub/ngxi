import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAddIcon],svg[lets-icons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="8" r="4" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M13.327 15.076Q12.669 15 12 15c-1.92 0-3.806.474-5.369 1.373c-1.562.9-2.75 2.197-3.3 3.738a1 1 0 0 0 1.883.672c.362-1.01 1.183-1.967 2.415-2.676c1.014-.584 2.235-.957 3.529-1.07a3 3 0 0 1 2.169-1.961" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2.5" d="M18 14v8m4-4h-8"></svg:path></svg:g>`,
})
export class LetsIconsUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
