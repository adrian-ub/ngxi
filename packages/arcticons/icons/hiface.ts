import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHifaceIcon],svg[arcticons-hiface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.204 32.386c-5.143 4.357-5.019-9.237-11.735-10.225l-2.944-.432c-.187 6.814.56 10.574 6.214 12.507c5.655 1.933 10.527-2.118 10.983-7.225c.417-4.677.707-8.36.314-13.733c-6.574.48-8.893 4.7-8.852 9.222l.046 5.08m15.566-11.966c5.143-4.357 5.019 9.237 11.735 10.225l2.944.432c.187-6.814-.56-10.574-6.214-12.507c-5.655-1.933-10.527 2.118-10.983 7.225c-.417 4.677-.707 8.36-.314 13.733c6.574-.48 8.893-4.7 8.852-9.222l-.046-5.08"></svg:path>`,
})
export class ArcticonsHifaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
