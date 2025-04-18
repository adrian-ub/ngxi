import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHyperrailIcon],svg[arcticons-hyperrail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.83 4.5v39m24.166-39v39M10.734 8.672h26.532c1.475 0 2.67 1.116 2.67 2.492h0c0 1.376-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.116-2.67-2.492h0c0-1.376 1.195-2.492 2.67-2.492m0 12.904h26.532c1.475 0 2.67 1.115 2.67 2.491h0c0 1.377-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.115-2.67-2.492h0c0-1.376 1.195-2.491 2.67-2.491m0 12.764h26.532c1.475 0 2.67 1.115 2.67 2.491h0c0 1.377-1.195 2.492-2.67 2.492H10.734c-1.475 0-2.67-1.115-2.67-2.492h0c0-1.376 1.195-2.491 2.67-2.491"></svg:path>`,
})
export class ArcticonsHyperrailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
