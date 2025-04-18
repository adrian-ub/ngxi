import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOitubeIcon],svg[arcticons-oitube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.33 22.232l-14.335-9.056c-1.392-.88-3.208.12-3.208 1.767v18.114c0 1.646 1.816 2.647 3.208 1.767l14.335-9.056a2.09 2.09 0 0 0 0-3.536"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.928 23.344l-6.634-4.1a.771.771 0 0 0-1.177.655v8.202c0 .604.663.973 1.177.656l6.634-4.101a.77.77 0 0 0 0-1.312M42.5 20.61L8.196 42.278M21.65 14.22L8.196 5.722"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsOitubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
