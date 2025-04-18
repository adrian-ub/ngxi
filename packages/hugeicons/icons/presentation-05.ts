import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation05Icon],svg[hugeicons-presentation-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11c0 2.828 0 4.243.879 5.121C4.257 17 5.672 17 8.5 17h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8zm6 11l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 17.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
