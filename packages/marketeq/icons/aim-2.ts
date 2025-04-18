import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAim2Icon],svg[marketeq-aim-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 8.333V6.25zm-4.167 25V43.75zm8.334 0V43.75zm-12.5 10.417h16.666zm12.5-22.917a4.166 4.166 0 1 0-8.332 0a4.166 4.166 0 0 0 8.332 0"></svg:path><svg:path stroke="#344054" d="M25 33.333c6.904 0 12.5-5.596 12.5-12.5c0-6.903-5.596-12.5-12.5-12.5s-12.5 5.597-12.5 12.5c0 6.904 5.596 12.5 12.5 12.5"></svg:path></svg:g>`,
})
export class MarketeqAim2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
