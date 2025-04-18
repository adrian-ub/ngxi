import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBedDuotoneIcon],svg[ph-bed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 112v56H112V80h104a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z"></svg:path></svg:g>`,
})
export class PhBedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
