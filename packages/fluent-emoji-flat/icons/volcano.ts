import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatVolcanoIcon],svg[fluent-emoji-flat-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M17.17 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#D3D3D3" d="M19.17 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#E6E6E6" d="M19.85 6h-3.68a2 2 0 1 0-4 0H11a2 2 0 1 0 0 4h1.533c.296 0 .467.197.467.467V13h6v-2.533c0-.266.208-.467.468-.467H22a2 2 0 1 0 0-4z"></svg:path><svg:path fill="#321B41" d="m19.613 14.367l-9.48.625l-5.99 12.875A1.5 1.5 0 0 0 5.502 30h20s-4.92-14.044-5.89-15.633"></svg:path><svg:path fill="#533566" d="m25.111 30l-2.487-6.395A2.52 2.52 0 0 0 20.278 22c-.772 0-1.466-.47-1.753-1.187L17 17v-2.382l4.613-.25l6.25 13.502a1.5 1.5 0 0 1-1.36 2.13z"></svg:path><svg:path fill="#FF6723" d="M10 16v-.556c0-.216.255-.742.255-.742s.77-1.667 1.022-2.262c.14-.33.384-.897.764-1.212c.306-.254.731-.294 1.022-.294c.389 0 3.495.024 5.937.043c.657.005.999.163 1.422.81l1.201 2.583s.377.907.377 1.383V18a1 1 0 1 1-2 0a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0v-1a1 1 0 1 0-2 0v7a1 1 0 1 1-2 0v-8c0-.643-.387-1-1-1s-1-.448-1-1"></svg:path><svg:path fill="#F4F4F4" d="M16 10.6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class FluentEmojiFlatVolcanoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
