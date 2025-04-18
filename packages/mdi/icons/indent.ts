import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIndentIcon],svg[mdi-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 3h20v3H2V3zm7 5h13v3H9V8zm0 5h13v3H9v-3zm-7 5h20v3H2v-3zM3 8l4 4l-4 4H2V8h1z" fill="currentColor"></svg:path>`,
})
export class MdiIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
