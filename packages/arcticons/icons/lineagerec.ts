import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineagerecIcon],svg[arcticons-lineagerec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.45 9.772A2.944 2.944 0 0 0 4.5 12.71v22.57a2.944 2.944 0 0 0 2.939 2.95H40.55a2.944 2.944 0 0 0 2.95-2.94V12.72a2.944 2.944 0 0 0-2.939-2.95h-.01zm7.456 8.853c-2.823 0-5.392 2.57-5.392 5.392s2.568 5.392 5.392 5.392s5.391-2.57 5.391-5.392s-2.568-5.392-5.391-5.392m18.222 0c-2.824 0-5.392 2.57-5.392 5.392s2.568 5.392 5.392 5.392s5.391-2.57 5.391-5.392s-2.568-5.392-5.391-5.392M14.906 29.409h18.222"></svg:path>`,
})
export class ArcticonsLineagerecIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
