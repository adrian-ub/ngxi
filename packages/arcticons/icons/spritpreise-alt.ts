import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpritpreiseAltIcon],svg[arcticons-spritpreise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 28.856l10.447-10.48L25.289 28.75L14.86 39.21zM40.812 14.8a2.687 2.687 0 0 1 2.683 2.691a2.69 2.69 0 0 1-2.683 2.692a2.69 2.69 0 0 1-2.684-2.692a2.69 2.69 0 0 1 2.684-2.692zM26.87 12.054v3.833h4.009l-4.897 7.628v-4.243l-3.75-.091z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.844 15.733l-.352-.371l-5.137-5.42"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.359 31.896v-3.69h7.07"></svg:path><svg:path d="m15.913 30.722l2.516-2.516l-2.516-2.515"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.58 22.02V11.244a2.454 2.454 0 0 1 2.453-2.454h11.044a2.454 2.454 0 0 1 2.454 2.454v24.541a2.454 2.454 0 0 1-2.454 2.454H21.033a2.454 2.454 0 0 1-2.454-2.454v-.305"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 17.491v15.274a2.686 2.686 0 0 1-2.686 2.686h0a2.686 2.686 0 0 1-2.686-2.686v-7.532c0-.95-.769-1.718-1.718-1.718h-1.88"></svg:path>`,
})
export class ArcticonsSpritpreiseAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
