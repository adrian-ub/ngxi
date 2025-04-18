import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBackward15SecondsIcon],svg[iconoir-backward-15-seconds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 13a9 9 0 1 0 9-9M9 9v7"></svg:path><svg:path d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2m0-12H4.5m0 0l2-2m-2 2l2 2"></svg:path></svg:g>`,
})
export class IconoirBackward15SecondsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
