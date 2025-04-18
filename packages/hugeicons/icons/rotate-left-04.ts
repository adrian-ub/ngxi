import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft04Icon],svg[hugeicons-rotate-left-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.148 11.92a1.33 1.33 0 0 0-1.794.495a1.286 1.286 0 0 0 .464 1.776l1.504.854m-.174-3.124l-1.505-.855A1.286 1.286 0 0 1 3.18 9.29a1.33 1.33 0 0 1 1.794-.494l1.128.642m-.954 2.483l4.137 2.35m-3.963.774a1.33 1.33 0 0 0-1.794.494a1.286 1.286 0 0 0 .464 1.776l4.638 2.636c1.635.929 2.453 1.393 3.25 1.512c.463.07 1.17-.04 1.697-.149a1.9 1.9 0 0 1 1.333.188l.876.498M5.322 15.045l3.385 1.924M6.102 9.438a1.286 1.286 0 0 1-.463-1.776a1.33 1.33 0 0 1 1.794-.494l6.365 3.617l-.504-1.92c-.221-.843.347-1.702 1.218-1.84a1.45 1.45 0 0 1 1.573.861l1.863 4.689c.356.897 1.21 1.76 2.05 2.237M6.102 9.438l3.761 2.137m-.5-6.609c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
