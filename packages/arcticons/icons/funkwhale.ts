import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFunkwhaleIcon],svg[arcticons-funkwhale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 23.093a18.5 18.5 0 0 1-37 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.335 23.093a11.335 11.335 0 1 1-22.67 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.463 23.093a5.463 5.463 0 0 1-10.926 0m5.173-.134c-2.689 0-.717-6.244-3.445-7.422c-2.938-1.269-9.27-1.195-9.988-9.13A27.9 27.9 0 0 1 18.1 7.911c3 1.284 4.821 1.198 6.208 4.582c0 0 .53-2.953 4.994-4.187a35.4 35.4 0 0 1 8.02-1.287a6.7 6.7 0 0 1-1.947 5.684c-2.53 2.332-7.963 2.273-8.441 4.652c-.49 2.432-.536 5.604-3.224 5.604"></svg:path>`,
})
export class ArcticonsFunkwhaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
