import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsLifesaverIcon],svg[akar-icons-lifesaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-width="2" clip-path="url(#akarIconsLifesaver0)"><svg:circle cx="12" cy="12" r="10" stroke-linecap="round" transform="rotate(45 12 12)"></svg:circle><svg:circle cx="12" cy="12" r="4" stroke-linecap="round" transform="rotate(45 12 12)"></svg:circle><svg:path d="m19.071 4.929l-4.243 4.243m-5.656 5.656l-4.243 4.243m14.142 0l-4.243-4.243M9.172 9.172L4.929 4.929"></svg:path></svg:g><svg:defs><svg:clippath id="akarIconsLifesaver0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class AkarIconsLifesaverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
