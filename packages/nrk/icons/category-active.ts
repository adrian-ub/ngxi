import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCategoryActiveIcon],svg[nrk-category-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"></svg:path>`,
})
export class NrkCategoryActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
