import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideIcon],svg[iconoir-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21v-9a5 5 0 0 0-5-5H3m9 14v-9a5 5 0 0 1 5-5h4"></svg:path><svg:path d="M7 3L3 7l4 4m10-8l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconoirDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
