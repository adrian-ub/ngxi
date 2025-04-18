import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCapIcon],svg[hugeicons-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2.5 17l-.442-2.474C1.425 8.636 6.056 3.5 12 3.5s10.575 5.136 9.942 11.026L21.5 17"></svg:path><svg:path d="M8.016 10.5c-.203-3.205 1.582-7 3.984-7m4 7c.203-3.205-1.582-7-3.984-7M12 3V2M2.5 17.01c8-2.867 11-2.486 19 0c-.276 1.12-.427 4.29-1.649 4.887c-.586.286-1.426-.098-2.03-.242c-2.896-.692-4.344-1.038-5.821-1.038s-2.925.346-5.821 1.038c-.604.144-1.444.528-2.03.242C2.927 21.3 2.776 18.13 2.5 17.009"></svg:path></svg:g>`,
})
export class HugeiconsCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
