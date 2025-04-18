import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLinkAlt2Icon],svg[marketeq-link-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M30.208 19.792a7.375 7.375 0 0 1 0 10.416L19.792 40.625a7.375 7.375 0 0 1-10.417 0a7.375 7.375 0 0 1 0-10.417"></svg:path><svg:path stroke="#306CFE" d="M40.625 19.792a7.375 7.375 0 0 0 0-10.417a7.375 7.375 0 0 0-10.417 0L19.792 19.792a7.375 7.375 0 0 0 0 10.416v0"></svg:path></svg:g>`,
})
export class MarketeqLinkAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
