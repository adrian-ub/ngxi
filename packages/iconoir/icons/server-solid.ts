import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirServerSolidIcon],svg[iconoir-server-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.6 13.25a1.35 1.35 0 0 0-1.35 1.35v6.8c0 .746.604 1.35 1.35 1.35h18.8a1.35 1.35 0 0 0 1.35-1.35v-6.8a1.35 1.35 0 0 0-1.35-1.35zm3.967 5.25a.75.75 0 0 0-1.114-1.003l-.01.011a.75.75 0 0 0 1.114 1.004zM2.6 1.25A1.35 1.35 0 0 0 1.25 2.6v6.8c0 .746.604 1.35 1.35 1.35h18.8a1.35 1.35 0 0 0 1.35-1.35V2.6a1.35 1.35 0 0 0-1.35-1.35zM6.567 6.5a.75.75 0 0 0-1.114-1.003l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirServerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
