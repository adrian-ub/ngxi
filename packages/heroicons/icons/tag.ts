import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsTagIcon],svg[heroicons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.1 18.1 0 0 0 5.224-5.223c.54-.827.368-1.908-.33-2.607l-9.583-9.58A2.25 2.25 0 0 0 9.568 3"></svg:path><svg:path d="M6 6h.008v.008H6z"></svg:path></svg:g>`,
})
export class HeroiconsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
