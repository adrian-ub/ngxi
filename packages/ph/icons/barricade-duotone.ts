import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarricadeDuotoneIcon],svg[ph-barricade-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v68l-76-76h68a8 8 0 0 1 8 8M32 72a8 8 0 0 0-8 8v4l76 76h72L84 72Z" opacity=".2"></svg:path><svg:path d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 64.69L175.31 80H224ZM80.69 80l72 72h-49.38L32 80.69V80ZM32 103.31L80.69 152H32ZM224 152h-48.69l-72-72h49.38L224 151.32z"></svg:path></svg:g>`,
})
export class PhBarricadeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
