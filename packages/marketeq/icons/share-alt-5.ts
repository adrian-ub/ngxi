import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqShareAlt5Icon],svg[marketeq-share-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m18.083 22.188l13.792-6.875M18.083 27.792l13.792 6.895z"></svg:path><svg:path stroke="#306CFE" d="M12.5 18.75a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 0 1 0-12.5M31.25 37.5a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 0 0-12.5 0m6.25-18.75a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path></svg:g>`,
})
export class MarketeqShareAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
