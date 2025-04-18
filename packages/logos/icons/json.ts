import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosJsonIcon],svg[logos-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosJson0" x1="15.791%" x2="91.009%" y1="14.737%" y2="85.228%"><svg:stop offset="0%"></svg:stop><svg:stop offset="100%" stop-color="#FFF"></svg:stop></svg:lineargradient><svg:lineargradient id="logosJson1" x1="82.136%" x2="-3.113%" y1="85.237%" y2="14.79%"><svg:stop offset="0%"></svg:stop><svg:stop offset="100%" stop-color="#FFF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosJson0)" d="M127.783 190.56c56.637 77.208 112.064-21.55 111.982-80.94C239.67 39.404 168.5.16 127.737.16C62.309.159 0 54.232 0 128.216C0 210.45 71.425 256 127.737 256c-12.743-1.835-55.21-10.934-55.78-108.747c-.385-66.154 21.58-92.585 55.688-80.958c.764.283 37.622 14.823 37.622 62.32c0 47.296-37.484 61.944-37.484 61.944"></svg:path><svg:path fill="url(#logosJson1)" d="M127.717 66.241c-37.424-12.899-83.269 17.946-83.269 79.726C44.448 246.844 119.201 256 128.263 256C193.691 256 256 201.926 256 127.943C256 45.709 184.575.159 128.263.159c15.597-2.16 84.065 16.88 84.065 110.458c0 61.026-51.124 94.248-84.376 80.054c-.764-.283-37.623-14.823-37.623-62.32c0-47.297 37.388-62.11 37.388-62.11"></svg:path>`,
})
export class LogosJsonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
