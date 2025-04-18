import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIndexRuntimeIcon],svg[oui-index-runtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v11h6v1H1V1h12v6.839l-1-.707z"></svg:path><svg:path fill="currentColor" d="M8 11v-1H5v1zm0-3.055c0-.342.082-.664.23-.945H5v1h3zM5 5h5.999V4H5zM3 4v1h1V4zm0 3v1h1V7zm0 3v1h1v-1zm11.607.2l-4.32-3.055C9.727 6.75 9 7.204 9 7.945v6.108c0 .74.726 1.196 1.287.8l4.32-3.055c.524-.37.524-1.228 0-1.598"></svg:path>`,
})
export class OuiIndexRuntimeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
