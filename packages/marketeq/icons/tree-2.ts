import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTree2Icon],svg[marketeq-tree-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M34.875 25.354c.352.882.535 1.822.542 2.771a7.29 7.29 0 0 1-7.292 7.292a7.2 7.2 0 0 1-3.125-.73a7.2 7.2 0 0 1-3.125.73a7.29 7.29 0 0 1-7.292-7.292c.007-.95.19-1.889.542-2.77a7.25 7.25 0 0 1 1.688-12.21a8.333 8.333 0 0 1 16.375 0a7.25 7.25 0 0 1 1.687 12.21"></svg:path><svg:path stroke="#344054" d="M20.833 43.75h8.334m-4.167 0V22.917z"></svg:path></svg:g>`,
})
export class MarketeqTree2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
