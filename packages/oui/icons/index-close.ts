import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIndexCloseIcon],svg[oui-index-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v11h6v1H1V1h12v6h-1zM5 5h5.999V4H5zM3 5V4h1v1zm2 3V7h3v1zM3 8V7h1v1zm2 3v-1h2v1zm5.5-1.207L9.086 8.379l-.707.707L9.793 10.5l-1.414 1.414l.707.707l1.414-1.414l1.414 1.414l.707-.707l-1.414-1.414l1.414-1.414l-.707-.707zM3 11v-1h1v1zm7.5-5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9"></svg:path>`,
})
export class OuiIndexCloseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
