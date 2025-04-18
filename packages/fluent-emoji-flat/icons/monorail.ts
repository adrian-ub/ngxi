import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMonorailIcon],svg[fluent-emoji-flat-monorail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M30 27H3a1 1 0 0 0-1 1v2h28z"></svg:path><svg:path fill="#0074BA" d="M30 7a40 40 0 0 0-5.371 1.226C20.5 11 20.485 11.011 16 15l-8.62 3.528l-4.522 4.023C1.128 24.089 2.188 27 4.478 27H13l15-1.5l2-4.5z"></svg:path><svg:path fill="#F8312F" d="M9 25H7c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1c0 .56-.45 1-1 1"></svg:path><svg:path fill="#E6E6E6" d="M15.158 24.6L13 27h17v-6h-6.198c-3.402-.009-6.598 1.329-8.644 3.6"></svg:path><svg:path fill="#26C9FC" fill-rule="evenodd" d="M24.626 8.227C23.17 14.403 17.621 19 11 19a14 14 0 0 1-3.62-.472L9.3 16.82a40.8 40.8 0 0 1 15.327-8.594" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMonorailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
