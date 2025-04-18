import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalFloristIcon],svg[ic-round-local-florist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.56 0 8.33-3.4 8.92-7.8c.09-.64-.48-1.21-1.12-1.12c-4.4.59-7.8 4.36-7.8 8.92M5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 0 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 5.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m-8.92 8.7C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92c-.64-.09-1.21.48-1.12 1.12"></svg:path>`,
})
export class IcRoundLocalFloristIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
