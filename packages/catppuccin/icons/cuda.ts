import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCudaIcon],svg[catppuccin-cuda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.46 9C9.5 12 3.5 13 .5 8c3.53-4.5 7-4.5 11-.5c-.62.65-4.52 3.9-8.5.5c0 0 2.5-3 5.5-.5c0 0-1.05.59-1.5.75"></svg:path><svg:path d="M4.5 4.8V2.5h11v11h-11v-2.3"></svg:path></svg:g>`,
})
export class CatppuccinCudaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
