import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAlignToMiddleIcon],svg[akar-icons-align-to-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M21 12H3"></svg:path><svg:path stroke-linejoin="round" d="M12 2v6m0 14v-6M9 5l3 3l3-3M9 19l3-3l3 3"></svg:path></svg:g>`,
})
export class AkarIconsAlignToMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
