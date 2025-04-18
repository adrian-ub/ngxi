import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoFillIcon],svg[ph-linktree-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 176a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm48-80h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32L128 123.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L108.69 120H72a8 8 0 0 1 0-16h36.69L82.34 77.66a8 8 0 0 1 11.32-11.32L120 92.69V56a8 8 0 0 1 16 0v36.69l26.34-26.35a8 8 0 0 1 11.32 11.32L147.31 104H184a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLinktreeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
