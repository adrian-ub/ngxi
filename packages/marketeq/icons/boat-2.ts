import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBoat2Icon],svg[marketeq-boat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.854 16.667c2.38-.015 4.702-.74 6.667-2.084v0a2.084 2.084 0 0 1 3.229 1.792v2.5a8.333 8.333 0 0 1-8.208 8.208H14.458a8.333 8.333 0 0 1-8.208-8.208v-2.5a2.083 2.083 0 0 1 3.23-1.792v0a11.94 11.94 0 0 0 6.666 2.084z"></svg:path><svg:path stroke="#344054" d="M33.792 10.417L16.667 34.979zM15.917 39.583l1.187-1.708a2.084 2.084 0 0 0-.437-2.896a2.085 2.085 0 0 0-2.917.5l-1.25 1.709z"></svg:path></svg:g>`,
})
export class MarketeqBoat2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
