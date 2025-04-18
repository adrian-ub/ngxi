import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBrush2FillIcon],svg[ri-brush-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.536 15.947l2.121-2.122l-3.182-3.182l3.536-3.535l-2.122-2.122l-3.535 3.536l-3.182-3.182L8.05 7.46zM13.354 5.693l2.828-2.828a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828l2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0z"></svg:path>`,
})
export class RiBrush2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
