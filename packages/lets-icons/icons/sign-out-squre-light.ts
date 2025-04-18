import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignOutSqureLightIcon],svg[lets-icons-sign-out-squre-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m2 12l-.39-.312l-.25.312l.25.312zm9 .5a.5.5 0 0 0 0-1zM5.61 6.688l-4 5l.78.624l4-5zm-4 5.624l4 5l.78-.624l-4-5zM2 12.5h9v-1H2z"></svg:path><svg:path stroke="currentColor" d="M10 8.132v-.743c0-1.619 0-2.428.474-2.987s1.272-.693 2.868-.96l1.672-.278c3.243-.54 4.864-.81 5.925.088C22 4.151 22 5.795 22 9.082v5.835c0 3.288 0 4.932-1.06 5.83c-1.062.9-2.683.63-5.926.089l-1.672-.279c-1.596-.266-2.394-.399-2.868-.958C10 19.039 10 18.229 10 16.61v-.545"></svg:path></svg:g>`,
})
export class LetsIconsSignOutSqureLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
