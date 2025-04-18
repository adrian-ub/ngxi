import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareThinIcon],svg[ph-wave-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v56a4 4 0 0 1-4 4H128a4 4 0 0 1-4-4V76H28v52a4 4 0 0 1-8 0V72a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v108h96v-52a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhWaveSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
