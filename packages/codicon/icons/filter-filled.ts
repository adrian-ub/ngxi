import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFilterFilledIcon],svg[codicon-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2v1.67l-5 4.759V14H6V8.429l-5-4.76V2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFilterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
