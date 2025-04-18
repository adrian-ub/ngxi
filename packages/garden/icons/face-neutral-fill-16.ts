import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFaceNeutralFill16Icon],svg[garden-face-neutral-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M6 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-4.35 3.5a.6.6 0 0 1 .6-.6h3.5a.6.6 0 1 1 0 1.2h-3.5a.6.6 0 0 1-.6-.6"></svg:path>`,
})
export class GardenFaceNeutralFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
