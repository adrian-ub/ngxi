import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoCircleIcon],svg[mynaui-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 16v-5h-.5m0 5h1M12 8.5V8"></svg:path></svg:g>`,
})
export class MynauiInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
