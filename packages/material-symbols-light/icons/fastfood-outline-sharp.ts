import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFastfoodOutlineSharpIcon],svg[material-symbols-light-fastfood-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.383 14.385q-.666-1.356-2.185-1.794t-3.14-.437q-1.612 0-3.155.437q-1.544.438-2.17 1.794zm-11.94 1q0-2.187 2.063-3.209t4.552-1.022t4.552 1.022t2.063 3.209zm0 3.307v-1h13.23v1zM17.672 22v-1h1.4l1.4-13.615h-9.011l-.135-1h4.615v-4h1v4h4.616L19.969 22zm0-1h1.4zm-15.23 1v-1h13.23v1zm6.615-7.616"></svg:path>`,
})
export class MaterialSymbolsLightFastfoodOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
