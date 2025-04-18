import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCloud16Icon],svg[qlementine-icons-cloud-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2C2.69 2 0 4.69 0 8s2.69 6 6 6h6c2.21 0 4-1.79 4-4a4 4 0 0 0-4.337-3.986a6 6 0 0 0-5.66-4.01zM1 8a5.002 5.002 0 0 1 9.83-1.3a.5.5 0 0 0 .581.36q.286-.058.591-.058c1.66 0 3 1.34 3 3s-1.34 3-3 3h-6c-2.76 0-5-2.24-5-5z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCloud16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
