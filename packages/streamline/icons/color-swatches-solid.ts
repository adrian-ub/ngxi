import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineColorSwatchesSolidIcon],svg[streamline-color-swatches-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h3A1.5 1.5 0 0 1 6 1.5v1.875H0V1.5A1.5 1.5 0 0 1 1.5 0M0 4.625v3.25h6v-3.25zM0 11V9.125h6V11a3 3 0 0 1-6 0m7.25-.008l5.089-5.088a1.5 1.5 0 0 0 0-2.122l-2.122-2.121a1.5 1.5 0 0 0-2.12 0l-.847.846zM6.01 14h6.49a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-.49z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineColorSwatchesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
