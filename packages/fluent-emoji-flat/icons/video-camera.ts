import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatVideoCameraIcon],svg[fluent-emoji-flat-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#321B41" d="M2 9a1 1 0 0 1 1-1h.14a.86.86 0 0 1 .86.86a.9.9 0 0 0 .044.272l.85 2.552a1 1 0 0 1 0 .632l-.85 2.551A.9.9 0 0 0 4 15.14a.86.86 0 0 1-.86.86H3a1 1 0 0 1-1-1zm27 5h-1l-1 4l1 4h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M16.5 25L7 26v2a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-2zM18 10H6l1 4h15a4 4 0 0 0-4-4"></svg:path><svg:path fill="#D3D3D3" d="M4 9h1.5A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15H4zm3 5h19v12H7zm6.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="#CA0B4A" d="M19 27.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path fill="#E6E6E6" d="M26 14h2v8h-2zM9 16a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"></svg:path><svg:path fill="#321B41" d="M11 18a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatVideoCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
