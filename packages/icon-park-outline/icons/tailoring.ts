import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTailoringIcon],svg[icon-park-outline-tailoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 4v32h32"></svg:path><svg:path stroke-linejoin="round" d="M20 12h16v16"></svg:path><svg:path d="M12 12H4m32 32v-8"></svg:path></svg:g>`,
})
export class IconParkOutlineTailoringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
