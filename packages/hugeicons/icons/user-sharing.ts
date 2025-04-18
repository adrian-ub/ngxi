import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSharingIcon],svg[hugeicons-user-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.783 17.111c-1.1.632-3.986 1.922-2.229 3.536C6.413 21.436 7.37 22 8.571 22h6.858c1.202 0 2.158-.564 3.017-1.353c1.757-1.614-1.128-2.904-2.229-3.536c-2.58-1.481-5.854-1.481-8.434 0M15.5 10a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M2.854 16A9.9 9.9 0 0 1 2 11.965C2 6.46 6.477 2 12 2s10 4.461 10 9.965A9.9 9.9 0 0 1 21.146 16"></svg:path></svg:g>`,
})
export class HugeiconsUserSharingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
