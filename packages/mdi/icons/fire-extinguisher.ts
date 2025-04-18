import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFireExtinguisherIcon],svg[mdi-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7h1.25L12 5h-1.75L6 7.5V9H4V6.5L10 3h2V2h2v1h2l1-.5v3L16 5h-2l.25 2h1.25A1.5 1.5 0 0 1 17 8.5V22H9V8.5A1.5 1.5 0 0 1 10.5 7"></svg:path>`,
})
export class MdiFireExtinguisherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
