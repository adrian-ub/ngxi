import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGpsIcon],svg[tdesign-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.001a8.98 8.98 0 0 0-8.981 8.98c0 2.35.9 4.488 2.378 6.09l.678.734l-1.47 1.356l-.678-.735a10.95 10.95 0 0 1-2.908-7.444C1.019 5.917 5.935 1 11.999 1C18.064 1 22.98 5.916 22.98 11.98c0 2.873-1.103 5.49-2.908 7.445l-.678.735l-1.47-1.356l.678-.735a8.95 8.95 0 0 0 2.378-6.088A8.98 8.98 0 0 0 12 3m0 4.5a4.5 4.5 0 0 0-3.308 7.55l.678.735l-1.47 1.356l-.678-.735a6.5 6.5 0 1 1 9.557 0l-.679.735l-1.47-1.356l.678-.735A4.5 4.5 0 0 0 12 7.5M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.947 3.966L16.936 23H6.959zm0 3.457l-1.117 1.575h2.235z"></svg:path>`,
})
export class TdesignGpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
