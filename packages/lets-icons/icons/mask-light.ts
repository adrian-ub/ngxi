import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMaskLightIcon],svg[lets-icons-mask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 8.5h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-2 2H4.825a1.675 1.675 0 0 0-1.59 2.205v0c.167.5.56.893 1.06 1.06L6.5 14.5m11-4h1.675a1.676 1.676 0 0 1 1.59 2.205v0c-.167.5-.56.893-1.06 1.06L17.5 14.5m-5.5-4v4m2-2h-4"></svg:path>`,
})
export class LetsIconsMaskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
