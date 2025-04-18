import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFoldableHorizontalIcon],svg[proicons-foldable-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.25L5.223 3.601A2 2 0 0 0 2.75 5.545v12.91A2 2 0 0 0 5.223 20.4L12 18.75m0-13.5v13.5m0-13.5l6.777-1.649a2 2 0 0 1 2.473 1.944v12.91a2 2 0 0 1-2.473 1.944L12 18.75"></svg:path>`,
})
export class ProiconsFoldableHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
