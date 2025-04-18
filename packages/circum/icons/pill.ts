import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPillIcon],svg[circum-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 4.691a5.5 5.5 0 0 0-7.78 0l-6.84 6.84a5.5 5.5 0 0 0 3.89 9.39a5.52 5.52 0 0 0 3.89-1.61l6.84-6.84a5.5 5.5 0 0 0 0-7.78m-.71 7.07l-3.42 3.42l-6.36-6.36L12.24 5.4a4.5 4.5 0 0 1 7.68 3.17a4.43 4.43 0 0 1-1.32 3.191"></svg:path>`,
})
export class CircumPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
