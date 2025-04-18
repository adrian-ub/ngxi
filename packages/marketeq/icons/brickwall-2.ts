import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBrickwall2Icon],svg[marketeq-brickwall-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 29.167h16.666v-8.334H22.917zm-6.25 0H6.25V37.5h10.417zm0-16.667H6.25v8.333h10.417z"></svg:path><svg:path stroke="#306CFE" d="M16.667 29.167h16.666V37.5H16.667zm-10.417 0h16.667v-8.334H6.25zm10.417-8.334h16.666V12.5H16.667zm27.083 8.334H33.333V37.5H43.75z"></svg:path></svg:g>`,
})
export class MarketeqBrickwall2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
