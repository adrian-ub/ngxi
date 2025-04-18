import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeLightIcon],svg[ph-vector-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 140.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 142h-95l-60 60H96a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.51l60-60v-95L92.24 60.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L126 38.49V130h91.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
