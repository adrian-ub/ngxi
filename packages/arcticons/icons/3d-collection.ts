import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dCollectionIcon],svg[arcticons-3d-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.56 19.43L24 14.8l7.44 4.628"></svg:path><svg:path d="M41.007 14.801L24 4.5L6.993 14.801M24 43.5l17.007-10.098v-18.6l-9.567 4.627v8.659l-5.846 3.188v5.315L24 37.594l-1.594-1.003v-5.315l-5.846-3.188v-8.659l-9.567-4.628v18.601z"></svg:path></svg:g>`,
})
export class Arcticons3dCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
