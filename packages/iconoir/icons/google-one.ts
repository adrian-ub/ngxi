import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleOneIcon],svg[iconoir-google-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 5v14a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0"></svg:path><svg:path d="M11.64 3.53L6.747 8.171a2 2 0 0 0 2.754 2.901l4.892-4.642a2 2 0 0 0-2.753-2.902"></svg:path></svg:g>`,
})
export class IconoirGoogleOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
