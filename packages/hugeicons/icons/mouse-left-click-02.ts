import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseLeftClick02Icon],svg[hugeicons-mouse-left-click-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 2.09c.665-.066 1.339-.09 2-.09c.925 0 1.837.078 2.735.188c2.44.3 4.334 2.332 4.524 4.723c.132 1.657.241 3.357.241 5.089s-.11 3.432-.24 5.089c-.19 2.391-2.084 4.422-4.525 4.723c-.898.11-1.81.188-2.735.188s-1.837-.078-2.735-.188c-2.44-.301-4.335-2.332-4.524-4.723C4.609 15.432 4.5 13.732 4.5 12q.001-1.008.044-2M12 2v9m-7 0h14"></svg:path><svg:circle cx="5.5" cy="5" r="2.5"></svg:circle></svg:g>`,
})
export class HugeiconsMouseLeftClick02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
