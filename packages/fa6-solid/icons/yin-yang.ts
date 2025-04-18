import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidYinYangIcon],svg[fa6-solid-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96c-106 0-192-86-192-192S150 64 256 64m0 448a256 256 0 1 0 0-512a256 256 0 1 0 0 512m32-352a32 32 0 1 0-64 0a32 32 0 1 0 64 0m-64 192a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidYinYangIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
