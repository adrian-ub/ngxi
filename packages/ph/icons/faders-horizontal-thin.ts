import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalThinIcon],svg[ph-faders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4M40 84h108v20a4 4 0 0 0 8 0V56a4 4 0 0 0-8 0v20H40a4 4 0 0 0 0 8m176 88h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8M88 148a4 4 0 0 0-4 4v20H40a4 4 0 0 0 0 8h44v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhFadersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
