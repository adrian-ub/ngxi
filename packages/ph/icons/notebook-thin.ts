import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotebookThinIcon],svg[ph-notebook-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 112a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-92v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h28V44H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4M212 48a4 4 0 0 0-4-4H84v168h124a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhNotebookThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
