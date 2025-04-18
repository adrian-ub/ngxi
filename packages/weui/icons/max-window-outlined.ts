import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMaxWindowOutlinedIcon],svg[weui-max-window-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 16v4a1 1 0 0 1-1 1h-4v-1.2h3.8V16zM8 3v1.2H4.2V8H3V4a1 1 0 0 1 1-1zm11.797 2.046l-5.472 5.472l-.849-.849l5.472-5.472h-2.951v-1.2h4a1 1 0 0 1 1 1v4h-1.2zM4.203 18.954l5.472-5.472l.849.849l-5.472 5.472h2.951v1.2h-4a1 1 0 0 1-1-1v-4h1.2z"></svg:path>`,
})
export class WeuiMaxWindowOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
