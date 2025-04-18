import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofThinIcon],svg[ph-solar-roof-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.58 126.21l-40-80A4 4 0 0 0 200 44H56a4 4 0 0 0-3.58 2.21l-40 80A4 4 0 0 0 12 128v56a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12v-56a4 4 0 0 0-.42-1.79M98.47 124l-16-32h39.06l16 32Zm3.06-72l16 32H78.47l-16-32Zm48 0l16 32h-39.06l-16-32Zm-3.06 72l-16-32h39.06l16 32Zm48 0l-16-32h39.06l16 32Zm19.06-40h-39.06l-16-32h39.06ZM20 184v-55.06l36-72l36 72V188H24a4 4 0 0 1-4-4m212 4H100v-56h136v52a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSolarRoofThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
