import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMagnetIcon],svg[fa6-solid-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 160v96c0 123.7 100.3 224 224 224s224-100.3 224-224v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96zm0-32h128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64zm320 0h128V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z"></svg:path>`,
})
export class Fa6SolidMagnetIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
