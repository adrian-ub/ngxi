import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesRemoveBoldSolidIcon],svg[bubbles-remove-bold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.11 3.719a1 1 0 0 0 0-1.414L13.694.89a1 1 0 0 0-1.414 0L8.118 5.054a.167.167 0 0 1-.236 0L3.719.891a1 1 0 0 0-1.414 0L.89 2.305a1 1 0 0 0 0 1.414l4.163 4.163a.17.17 0 0 1 0 .236L.891 12.281a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.163-4.163a.167.167 0 0 1 .236 0l4.163 4.163a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.163-4.163a.17.17 0 0 1 0-.236z"></svg:path>`,
})
export class BubblesRemoveBoldSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
