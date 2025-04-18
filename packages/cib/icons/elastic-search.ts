import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibElasticSearchIcon],svg[cib-elastic-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.027 20.771H2.146A15.8 15.8 0 0 1 1.427 16c0-1.667.24-3.265.719-4.771h21.147A4.76 4.76 0 0 1 28.069 16a4.747 4.747 0 0 1-4.735 4.771zm-.6 1.604H2.735a15.74 15.74 0 0 0 5.853 6.907a15.7 15.7 0 0 0 8.745 2.625c5.531 0 10.375-2.828 13.24-7.068a8.12 8.12 0 0 0-5.803-2.479zM24.771 9.64a8.1 8.1 0 0 0 5.803-2.468A15.944 15.944 0 0 0 2.735 9.64z"></svg:path>`,
})
export class CibElasticSearchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
