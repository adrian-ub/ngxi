import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCategoryIcon],svg[material-symbols-light-category-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 10.23L12 3.463l4.116 6.769zm9.606 11q-1.558 0-2.64-1.081t-1.082-2.64t1.082-2.649t2.64-1.09t2.649 1.09t1.09 2.649t-1.09 2.64t-2.649 1.082m-13.722-.5v-6.462h6.462v6.462z"></svg:path>`,
})
export class MaterialSymbolsLightCategoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
