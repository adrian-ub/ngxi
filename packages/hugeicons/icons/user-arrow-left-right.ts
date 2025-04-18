import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserArrowLeftRightIcon],svg[hugeicons-user-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.981.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.656 1.5l.747-.705C22.801 7.42 23 7.233 23 7s-.199-.42-.597-.795l-.747-.705M22.979 7H19M2.345 8.5l-.748-.705C1.199 7.42 1 7.233 1 7s.199-.42.597-.795l.748-.705M1.02 7H5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
