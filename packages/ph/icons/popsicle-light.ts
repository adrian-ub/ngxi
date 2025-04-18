import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPopsicleLightIcon],svg[ph-popsicle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 10a70.08 70.08 0 0 0-70 70v96a14 14 0 0 0 14 14h34v42a22 22 0 0 0 44 0v-42h34a14 14 0 0 0 14-14V80a70.08 70.08 0 0 0-70-70m10 222a10 10 0 0 1-20 0v-42h20Zm48-56a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V80a58 58 0 0 1 116 0ZM118 72v80a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m32 0v80a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPopsicleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
