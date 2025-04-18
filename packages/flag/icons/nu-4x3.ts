import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNu4x3Icon],svg[flag-nu-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fedd00" d="M0 0h640v480H0z"></svg:path><svg:path fill="#012169" d="M0 0h320v240H0z"></svg:path><svg:path fill="#fff" d="m37.5 0l122 90.5L281 0h39v31l-120 89.5l120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"></svg:path><svg:path fill="#c8102e" d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5l-96 72H0zM320 0v1.5l-124.5 94l1-22L295 0zM0 0l119.5 88h-30L0 21z"></svg:path><svg:path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z"></svg:path><svg:path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"></svg:path><svg:circle cx="160" cy="120" r="40.8" fill="#012169"></svg:circle><svg:path fill="#fedd00" d="m160 79.2l24 73.8l-62.8-45.6h77.6L136 153M66.7 98.3l14 43.4L43.9 115h45.7l-37 26.8m200.7-43.5l14.1 43.4l-36.9-26.8h45.7l-37 26.8M160 178.3l14.1 43.4l-37-26.8h45.7l-37 26.8M160 18.3l14.1 43.4l-37-26.8h45.7l-37 26.8"></svg:path>`,
})
export class FlagNu4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
