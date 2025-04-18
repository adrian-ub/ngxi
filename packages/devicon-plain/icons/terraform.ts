import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainTerraformIcon],svg[devicon-plain-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M46.324 26.082L77.941 44.5v36.836L46.324 62.918zM81.41 44.5v36.836l31.633-18.418V26.082zM11.242 5.523V42.36L42.86 60.777V23.941zm66.699 79.852L46.324 66.957v36.824L77.941 122.2zm0 0"></svg:path>`,
})
export class DeviconPlainTerraformIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
