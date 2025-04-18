import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMountainRailwayIcon],svg[fluent-emoji-flat-mountain-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#008463" d="M14.647 5.595L2.237 20.22a1 1 0 0 0-.237.647V30h28V17L17.533 5.423a2 2 0 0 0-2.886.172"></svg:path><svg:path fill="#00D26A" d="M24.023 2.79L9.23 20.723a1 1 0 0 0-.229.636V30h21V6l-2.948-3.275a2 2 0 0 0-3.029.065"></svg:path><svg:path fill="#636363" d="M16 28a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0h-2a2 2 0 0 0 2 2z"></svg:path><svg:path fill="#FFB02E" d="M11 12a1 1 0 0 1 1-1h18v2l-2 5l2 5v5H12a1 1 0 0 1-1-1v-4l2-5l-2-5z"></svg:path><svg:path fill="#F9C23C" d="M12 24.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="#E6E6E6" d="M11 13h19v1l-1 4l1 4v1H11v-1l1-4l-1-4z"></svg:path><svg:path fill="#FF6723" d="M12 24.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="#26C9FC" d="M13 14h-2v8h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m16 0h1v8h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m-13 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm7-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"></svg:path><svg:path fill="#D3D3D3" d="M14 28h6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMountainRailwayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
