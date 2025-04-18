import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSailboatIcon],svg[marketeq-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.583 32.167L22.917 12.5m16.458 16.667A25.69 25.69 0 0 0 22.917 8.333v22.5"></svg:path><svg:path stroke="#306CFE" d="M28.48 41.667H9.5a2.08 2.08 0 0 1-2.083-1.605L6.25 35.418a2.083 2.083 0 0 1 1.813-2.688l33.333-3.604a2.082 2.082 0 0 1 2.083 3.146a16.94 16.94 0 0 1-15 9.396"></svg:path></svg:g>`,
})
export class MarketeqSailboatIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
