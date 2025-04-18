import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDantotsuAltIcon],svg[arcticons-dantotsu-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m15.005 28.44H5.955m18.55-20.274H5.686"></svg:path><svg:path d="M24.505 13.666q.154-.005.308-.005c5.616 0 10.169 4.553 10.169 10.17h0c0 5.616-4.553 10.109-10.17 10.109c-.126 0-.18.005-.307 0"></svg:path><svg:path d="M20.77 19.85v7.509c.07.926.843 1.418 2.083.978l6.316-3.935c.481-.347.51-.907.05-1.267l-6.38-3.947c-1.103-.621-1.91-.285-2.069.661z"></svg:path></svg:g>`,
})
export class ArcticonsDantotsuAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
