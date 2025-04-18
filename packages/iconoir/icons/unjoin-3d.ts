import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUnjoin3dIcon],svg[iconoir-unjoin-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 7L9 12h6l-2.5 5m8.339 3.84h-3.536m3.536 0v-3.536m0 3.535L17 17M2.768 2.768h3.535m-3.535 0v3.535m0-3.535l3.839 3.839"></svg:path>`,
})
export class IconoirUnjoin3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
