import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTextSizeIcon],svg[iconoir-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7V5h14v2m-7-2v14m0 0h2m-2 0H8m5-5v-2h8v2m-4-2v7m0 0h-1.5m1.5 0h1.5"></svg:path>`,
})
export class IconoirTextSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
