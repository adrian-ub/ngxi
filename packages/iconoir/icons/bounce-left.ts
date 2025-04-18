import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBounceLeftIcon],svg[iconoir-bounce-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4m15 8.5c-3-1-5.5-.5-8 4.5c-.5-3-2-7.5-3.5-10"></svg:path>`,
})
export class IconoirBounceLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
