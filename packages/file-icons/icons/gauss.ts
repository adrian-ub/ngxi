import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGaussIcon],svg[file-icons-gauss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.699 242.424c-8.47 6.932-10.408 14.486.217 23.237l187.233 150.6l-62.846 54.269L5.414 264.12c-7.233-6.102-7.216-17.252.035-23.333L250.722 41.47l64.107 50.427zm185.069-56.959l67.068 57.46c6.686 5.815 6.672 16.204-.03 22.002l-92.637 79.253l57.598 47.999l160.671-128.356c8.853-7.45 8.73-17.05-.257-24.337L375.486 136.827z"></svg:path>`,
})
export class FileIconsGaussIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
