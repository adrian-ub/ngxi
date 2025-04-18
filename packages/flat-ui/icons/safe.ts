import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiSafeIcon],svg[flat-ui-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C8CACA" d="M47.931 3.242V1.767c-16.767.791-28.518 5.227-35.851 13.557C5.789 22.471 2.536 33.2 1.95 47.406h1.483c1.265-29.27 14.472-42.76 44.498-44.164m48.585 43.914l1.473.109c-.586-14.216-3.84-24.562-10.131-31.714C80.525 7.217 68.773 2.776 52.007 1.986v1.476c30.025 1.404 43.244 14.403 44.509 43.694M3.432 52.719H1.95c.586 14.139 3.9 24.692 10.186 31.805c7.328 8.289 19.071 12.705 35.827 13.49v-1.468C17.957 95.15 4.696 81.848 3.432 52.719m48.605 43.609v1.469c16.756-.787 28.499-5.206 35.826-13.501C94.15 77.18 97.4 66.898 97.986 52.75h-1.455c-1.263 29.148-14.488 42.182-44.494 43.578"></svg:path><svg:path fill="#35495E" d="M3 47a3 3 0 1 0 0 6a3 3 0 0 0 0-6m94 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6M50 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 94a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path><svg:path fill="#E64B3C" d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45s45-20.146 45-45S74.854 5 50 5m0 69c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24"></svg:path><svg:path fill="none" d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45s45-20.146 45-45S74.854 5 50 5m0 69c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24"></svg:path><svg:defs><svg:path id="flatUiSafe0" d="M50 5C25.146 5 5 25.147 5 50s20.146 45 45 45s45-20.146 45-45S74.854 5 50 5m0 69c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24"></svg:path></svg:defs><svg:clippath id="flatUiSafe1"><svg:use href="#flatUiSafe0"></svg:use></svg:clippath><svg:g fill="#C54132" clip-path="url(#flatUiSafe1)"><svg:path d="m67 58l33 33V58zM50 41V-1L13 4z"></svg:path></svg:g><svg:defs><svg:path id="flatUiSafe2" d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45s45-20.146 45-45S74.854 5 50 5m0 69c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24"></svg:path></svg:defs><svg:clippath id="flatUiSafe3"><svg:use href="#flatUiSafe2"></svg:use></svg:clippath><svg:path fill="#EBECED" d="M70 38v24h26V38zM4 62h26V38H4zm34 34h24V70H38zm0-66h24V4H38z" clip-path="url(#flatUiSafe3)"></svg:path>`,
})
export class FlatUiSafeIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
