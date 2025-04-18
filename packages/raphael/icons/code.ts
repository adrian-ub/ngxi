import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCodeIcon],svg[raphael-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.982 7.107L.322 15.77l8.66 8.662l3.15-3.15l-5.51-5.512l5.51-5.51zm12.675 0l-3.148 3.15l5.51 5.512l-5.51 5.51l3.147 3.15l8.662-8.662l-8.663-8.66z"></svg:path>`,
})
export class RaphaelCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
