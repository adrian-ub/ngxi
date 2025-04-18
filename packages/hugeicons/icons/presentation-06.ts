import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation06Icon],svg[hugeicons-presentation-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h18V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8zm-1 0h20M8.5 22l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 17.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
