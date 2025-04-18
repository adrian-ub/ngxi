import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseRightClick02Icon],svg[hugeicons-mouse-right-click-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 2.09a20 20 0 0 0-2-.09c-.925 0-1.837.078-2.735.188c-2.44.3-4.334 2.332-4.524 4.723C4.109 8.568 4 10.268 4 12s.11 3.432.24 5.089c.19 2.391 2.084 4.422 4.525 4.723c.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.335-2.332 4.524-4.723c.132-1.657.241-3.357.241-5.089q-.001-1.008-.044-2M11.5 2v9m7 0h-14"></svg:path><svg:circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 20 2.5)"></svg:circle></svg:g>`,
})
export class HugeiconsMouseRightClick02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
