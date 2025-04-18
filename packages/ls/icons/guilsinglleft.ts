import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGuilsinglleftIcon],svg[ls-guilsinglleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M516 556L11 324l-11-6v-67l11-7L516 14v79L98 284l418 192z"></svg:path>`,
})
export class LsGuilsinglleftIcon {
  readonly viewBox = input("0 0 516 614")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
