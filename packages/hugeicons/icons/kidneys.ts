import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKidneysIcon],svg[hugeicons-kidneys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.986 6c.157-1.406-.981-3-3.415-3c-2.524 0-4.57 2.462-4.57 5.5S3.538 14 6.063 14c1.616 0 2.472-1.254 2.292-2.341"></svg:path><svg:path d="M7 8c1.5 0 3.5.496 3.5 3.64c0 4.16-2 5.72-.5 9.36m7-13c-1.5 0-3.5.496-3.5 3.64c0 4.16 2 5.72.5 9.36"></svg:path><svg:path d="M6.61 6c.204.571.55 1.943.306 2.857C6.814 9.238 6.488 10 6 10m8.014-4c-.157-1.406.981-3 3.415-3c2.524 0 4.57 2.462 4.57 5.5S20.462 14 17.937 14c-1.695 0-2.554-1.38-2.258-2.5"></svg:path><svg:path d="M17.39 6c-.204.571-.55 1.943-.306 2.857c.102.381.428 1.143.916 1.143"></svg:path></svg:g>`,
})
export class HugeiconsKidneysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
