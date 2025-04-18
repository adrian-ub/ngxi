import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeEmbedIcon],svg[nrk-some-embed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.1 22H8.828l3.9-20H15zM5.9 5L1 12l4.9 7h2.272l-4.9-7l4.9-7zm12.202 0l4.9 7l-4.9 7H15.83l4.9-7l-4.9-7z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeEmbedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
