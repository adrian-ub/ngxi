import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHome2Icon],svg[icomoon-free-home2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 .5l-8 8L1.5 10L3 8.5V15h4v-3h2v3h4V8.5l1.5 1.5L16 8.5zM8 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcomoonFreeHome2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
