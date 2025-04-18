import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseScroll01Icon],svg[hugeicons-mouse-scroll-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.74 17.089c.19 2.391 2.084 4.422 4.525 4.723c.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.334-2.332 4.524-4.723c.132-1.657.241-3.357.241-5.089s-.11-3.432-.24-5.089c-.19-2.391-2.084-4.422-4.525-4.723C13.837 2.078 12.925 2 12 2s-1.837.078-2.735.188c-2.44.3-4.335 2.332-4.524 4.723C4.609 8.568 4.5 10.268 4.5 12s.109 3.432.24 5.089M11.988 6.84v4.92"></svg:path><svg:path d="M10.004 7.86c.982-1.02 1.58-1.92 2.036-1.856c.383-.003.742.596 1.964 1.856m-.008 3.282c-.982 1.02-1.58 1.92-2.036 1.855c-.383.003-.742-.595-1.964-1.855"></svg:path></svg:g>`,
})
export class HugeiconsMouseScroll01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
