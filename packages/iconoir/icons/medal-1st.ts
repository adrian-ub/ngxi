import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMedal1stIcon],svg[iconoir-medal-1st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path><svg:path d="m10.5 15l2-1.5v5"></svg:path></svg:g>`,
})
export class IconoirMedal1stIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
