import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlantscaleIcon],svg[lineicons-plantscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2c4.06 0 7.556 2.42 9.122 5.897L7.898 21.122a10 10 0 0 1-1.613-.915L14.492 12H12l-7.071 7.071A9.97 9.97 0 0 1 2 12m20 .004L12.003 22c5.52-.002 9.995-4.477 9.997-9.996"></svg:path>`,
})
export class LineiconsPlantscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
