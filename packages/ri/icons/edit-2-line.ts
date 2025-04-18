import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEdit2LineIcon],svg[ri-edit-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18.89h1.414l9.314-9.314l-1.414-1.414L5 17.476zm16 2H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 18.89H21zM15.728 6.748l1.414 1.414l1.414-1.414l-1.414-1.414z"></svg:path>`,
})
export class RiEdit2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
