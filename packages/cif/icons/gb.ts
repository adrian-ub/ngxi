import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGbIcon],svg[cif-gb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h299.843v149.983H.5z"></svg:path><svg:path fill="#CF142B" d="M135.428 90.444v60.039h29.988V90.444h134.928V60.46H165.416V.5h-29.988v59.96H.5v29.984z"></svg:path><svg:path fill="#00247D" d="M175.415 49.049V.5h97.08zm0 52.884v48.55h97.08zm-49.987 0v48.55H28.349zm0-52.884V.5H28.349zM.501 14.442v36.051h72.087zm299.842 0v36.051h-72.087zm0 122.099V100.49h-72.087zm-299.842 0V100.49h72.087z"></svg:path><svg:path fill="#CF142B" d="M300.343.5h-16.654L183.9 50.493h16.654L300.5.5m-183.557 99.987h-16.654L.5 150.48h16.654l99.946-49.993M83.768 50.532h16.653L.5.5v8.385zm133.255 49.936h-16.654L300.29 150.5v-8.385z"></svg:path></svg:g>`,
})
export class CifGbIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
