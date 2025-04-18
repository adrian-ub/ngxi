import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVimeoIcon],svg[hugeicons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.346 4.654c-2.309-1.833-5.885.99-6.75 2.473c1.301.305 3.904.416 1.404 4.9c-1 1.662-3.3 3.788-4.5-.996C10 5.051 10 .567 2 7.543c.476.948 1.766 1.045 2.741.627c.887-.38 1.802-.229 2.259 1.367c1 3.487 1.5 10.45 5 10.45c3.634.494 12.461-12.86 9.346-15.333" color="currentColor"></svg:path>`,
})
export class HugeiconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
