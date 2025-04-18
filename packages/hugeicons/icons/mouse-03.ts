import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse03Icon],svg[hugeicons-mouse-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.74 17.089c.19 2.391 2.084 4.422 4.525 4.723c.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.334-2.332 4.524-4.723c.132-1.657.241-3.357.241-5.089s-.11-3.432-.24-5.089c-.19-2.391-2.084-4.422-4.525-4.723C13.837 2.078 12.925 2 12 2s-1.837.078-2.735.188c-2.44.3-4.335 2.332-4.524 4.723C4.609 8.568 4.5 10.268 4.5 12s.109 3.432.24 5.089M12 5.5v2M5 11h14" color="currentColor"></svg:path>`,
})
export class HugeiconsMouse03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
