import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHeartOffFillIcon],svg[iconamoon-heart-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.707 3.293a1 1 0 0 0-1.414 1.414l.795.795a6 6 0 0 0 .134 8.347l5.657 5.657a3 3 0 0 0 4.242 0l1.986-1.985l3.186 3.186a1 1 0 0 0 1.414-1.414l-3.885-3.885l-.017-.017L6.267 4.853l-.03-.03zM12 4.758a6.002 6.002 0 0 1 7.778 9.091l-.136.136a1 1 0 0 1-1.414-1.414l.136-.136a4 4 0 0 0-5.657-5.657a1 1 0 0 1-1.414 0a4 4 0 0 0-.889-.671a1 1 0 1 1 .971-1.749q.322.18.625.4" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonHeartOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
