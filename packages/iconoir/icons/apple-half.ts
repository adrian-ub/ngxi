import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAppleHalfIcon],svg[iconoir-apple-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12.147 21.265l-.147-.03l-.147.03c-2.377.475-4.62.21-6.26-1.1C3.964 18.86 2.75 16.373 2.75 12c0-4.473 1.008-6.29 2.335-6.954c.695-.347 1.593-.448 2.735-.317c1.141.132 2.458.488 3.943.983l.26.086l.255-.102c2.482-.992 4.713-1.373 6.28-.641c1.47.685 2.692 2.538 2.692 6.945c0 4.374-1.213 6.86-2.843 8.164c-1.64 1.312-3.883 1.576-6.26 1.1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 5.5C12 3 11 2 9 2"></svg:path><svg:path d="M12 6v15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12v2"></svg:path></svg:g>`,
})
export class IconoirAppleHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
