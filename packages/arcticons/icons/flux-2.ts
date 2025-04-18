import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlux2Icon],svg[arcticons-flux-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="17.343" cy="24.701" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="12.843" ry="12.87"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.859 14.068a7.839 7.839 0 0 1 13.449 8.044"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.813 21.613h5.712a7.976 7.976 0 0 1 0 15.95H16.354"></svg:path>`,
})
export class ArcticonsFlux2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
