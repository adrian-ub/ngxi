import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilFlowerBudIcon],svg[pepicons-pencil-flower-bud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill-rule="evenodd" d="M15.944 13.371a3.502 3.502 0 0 0 0-6.742Q16 6.319 16 6a3.5 3.5 0 0 0-6-2.45a3.5 3.5 0 0 0-5.944 3.078a3.502 3.502 0 0 0 0 6.743A3.5 3.5 0 0 0 10 16.45a3.5 3.5 0 0 0 5.944-3.078m-1.091-6.523a.5.5 0 0 0 .417.666a2.5 2.5 0 0 1 0 4.972a.5.5 0 0 0-.417.666q.146.407.147.848a2.5 2.5 0 0 1-4.584 1.382a.5.5 0 0 0-.832 0a2.5 2.5 0 0 1-4.436-2.23a.5.5 0 0 0-.418-.666a2.5 2.5 0 0 1 0-4.972a.5.5 0 0 0 .417-.666a2.5 2.5 0 0 1 4.436-2.23a.5.5 0 0 0 .833 0a2.5 2.5 0 0 1 4.436 2.23" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilFlowerBudIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
