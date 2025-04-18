import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBalIcon],svg[cryptocurrency-color-bal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#1E1E1E"></svg:circle><svg:g fill="#FFF"><svg:path d="M16.092 23.196C10.518 23.196 6 21.586 6 19.428c0-1.126 1.23-2.14 3.2-2.856c1.538.987 4.117 1.493 7.042 1.493c2.856 0 5.38-.617 6.93-1.562c1.859.707 3.013 1.694 3.013 2.782c0 2.161-4.518 3.911-10.093 3.911"></svg:path><svg:path d="M16.152 17.58c-4.226 0-7.652-1.325-7.652-2.96c0-.906 1.056-1.718 2.712-2.259c1.182.617 2.953 1.011 4.94 1.011s3.758-.394 4.94-1.01c1.659.543 2.712 1.352 2.712 2.258c.003 1.635-3.424 2.96-7.652 2.96"></svg:path><svg:path d="M16.124 12.88c-3.267 0-5.916-1.094-5.916-2.44S12.858 8 16.124 8s5.916 1.095 5.916 2.44c0 1.346-2.65 2.44-5.916 2.44"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorBalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
