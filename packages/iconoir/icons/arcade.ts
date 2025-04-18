import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArcadeIcon],svg[iconoir-arcade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11 8.5L9.8 9l-7.448 3.386a.6.6 0 0 0-.352.546v.136a.6.6 0 0 0 .352.546l8.82 4.01a2 2 0 0 0 1.656 0l8.82-4.01a.6.6 0 0 0 .352-.546v-.136a.6.6 0 0 0-.352-.546L14.2 9L13 8.5"></svg:path><svg:path d="M22 13v4.112a.6.6 0 0 1-.354.547l-8.825 3.972a2 2 0 0 1-1.642 0l-8.825-3.972A.6.6 0 0 1 2 17.112V13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path d="M11 8v5a1 1 0 1 0 2 0V8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 13h1"></svg:path></svg:g>`,
})
export class IconoirArcadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
