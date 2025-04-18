import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRuffIcon],svg[catppuccin-ruff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M6.958 1.5a.22.22 0 0 0-.224.217v.65c0 .12-.1.216-.224.216h-.627a.22.22 0 0 0-.224.217v1.733c0 .12-.1.217-.224.217h-.627a.22.22 0 0 0-.225.217v1.191c0 .12-.1.217-.224.217h-.627a.22.22 0 0 0-.224.217v1.191c0 .12-.1.217-.224.217h-.56a.22.22 0 0 0-.224.217v.65c0 .12.1.216.224.216h2.912a.22.22 0 0 1 .224.217v1.192c0 .12-.1.216-.224.216H5.01a.22.22 0 0 0-.224.217v1.192c0 .12-.1.216-.224.216h-.627a.22.22 0 0 0-.224.217v1.733c0 .12.1.217.224.217h1.792a.22.22 0 0 0 .224-.217v-.866h.896a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.216v-.65c0-.12.1-.217.224-.217h.627a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.216.224-.216h.627a.22.22 0 0 0 .224-.217V9.3c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.216v-.65c0-.12.1-.217.224-.217h.627a.22.22 0 0 0 .224-.217V6.05a.22.22 0 0 0-.224-.217h-.65a.22.22 0 0 1-.224-.216v-.65c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.216.224-.216h.627a.22.22 0 0 0 .224-.217V1.717a.22.22 0 0 0-.224-.217Z" clip-rule="evenodd"></svg:path>`,
})
export class CatppuccinRuffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
