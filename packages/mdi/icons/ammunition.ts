import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAmmunitionIcon],svg[mdi-ammunition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4v-1h4zm-1-12V7h-2v3l-1 1.5V20h4v-8.5zm-1-8s-1 1-1 3v1h2V5s0-2-1-3M8 22H4v-1h4zM7 10V7H5v3l-1 1.5V20h4v-8.5zM6 2S5 3 5 5v1h2V5s0-2-1-3m14 20h-4v-1h4zm-1-12V7h-2v3l-1 1.5V20h4v-8.5zm-1-8s-1 1-1 3v1h2V5s0-2-1-3"></svg:path>`,
})
export class MdiAmmunitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
