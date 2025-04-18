import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotebookLightIcon],svg[ph-notebook-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 112a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-90v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M48 210h26V46H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2M210 48a2 2 0 0 0-2-2H86v164h122a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhNotebookLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
