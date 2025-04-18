import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVectorifydahomeIcon],svg[arcticons-vectorifydahome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="m31.616 13.799l2.585 2.585a1.02 1.02 0 0 1-.012 1.455l-2.467 2.373l-3.934-3.934l2.373-2.467a1.02 1.02 0 0 1 1.455-.012Z"></svg:path><svg:path d="M13.5 34.5v-3.934l14.288-14.288l3.934 3.934L17.434 34.5z"></svg:path><svg:path stroke-linecap="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path></svg:g>`,
})
export class ArcticonsVectorifydahomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
