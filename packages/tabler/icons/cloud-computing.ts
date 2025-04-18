import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCloudComputingIcon],svg[tabler-cloud-computing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.657 16C4.085 16 2 13.993 2 11.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773c1.88-.572 3.956-.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486s-1.551 3.487-3.465 3.487H6.657M12 16v5"></svg:path><svg:path d="M16 16v4a1 1 0 0 0 1 1h4M8 16v4a1 1 0 0 1-1 1H3"></svg:path></svg:g>`,
})
export class TablerCloudComputingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
