import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkEditIcon],svg[nrk-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.9 2L3 14.9v5.7h5.7L21.5 7.7zM7.8 18.5H5v-2.8l7.9-7.9l2.8 2.8zm6.5-12.1l1.6-1.6l2.8 2.8l-1.6 1.6z"></svg:path><svg:path d="M12 21h8.6v-2H14z" opacity=".5"></svg:path></svg:g>`,
})
export class NrkEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
