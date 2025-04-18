import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindsockIcon],svg[mdi-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v8l15-2V7zm3 1.91l3 .4v3.38l-3 .4zm6 .8l3 .4v1.78l-3 .4zM5 10v1h1v1H5v9H3V4c0-.55.45-1 1-1s1 .45 1 1v2h1v1H5z"></svg:path>`,
})
export class MdiWindsockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
