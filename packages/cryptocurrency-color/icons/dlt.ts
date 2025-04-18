import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDltIcon],svg[cryptocurrency-color-dlt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#f4ae95"></svg:circle><svg:path fill="#fff" d="M15.807 8.958L9.713 21.965H19.83c.293 0 .558.18.673.455l.011.025a.64.64 0 0 1-.031.56a.96.96 0 0 1-.835.495H8.896a.83.83 0 0 1-.466-.145l-.056-.038a.874.874 0 0 1-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.69.69 0 0 1 .892-.01a.5.5 0 0 1 .135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 0 1-.548.423h-.084a.88.88 0 0 1-.794-.516L16.249 8.96a.24.24 0 0 0-.22-.145a.24.24 0 0 0-.222.143"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
