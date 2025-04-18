import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDivideThreeIcon],svg[iconoir-divide-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21v-4a5 5 0 0 0-5-5H3m9 9v-4a5 5 0 0 1 5-5h4M12 2v20"></svg:path><svg:path d="m6 8l-4 4l4 4M16 6l-4-4l-4 4m10 2l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconoirDivideThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
