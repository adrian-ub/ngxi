import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalTerraformIcon],svg[devicon-original-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#5c4ee5" d="M77.941 44.5v36.836L46.324 62.918V26.082zm0 0"></svg:path><svg:path fill="#4040b2" d="m81.41 81.336l31.633-18.418V26.082L81.41 44.5zm0 0"></svg:path><svg:path fill="#5c4ee5" d="M11.242 42.36L42.86 60.776V23.941L11.242 5.523zm66.699 43.015L46.324 66.957v36.82l31.617 18.418zm0 0"></svg:path></svg:g>`,
})
export class DeviconOriginalTerraformIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
