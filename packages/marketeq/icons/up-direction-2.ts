import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpDirection2Icon],svg[marketeq-up-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.854 36.896L25 24.042L12.146 36.896"></svg:path><svg:path stroke="#306CFE" d="M12.146 36.896L6.25 31.02l17.27-17.292a2.08 2.08 0 0 1 2.96 0L43.75 31l-5.896 5.896"></svg:path></svg:g>`,
})
export class MarketeqUpDirection2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
