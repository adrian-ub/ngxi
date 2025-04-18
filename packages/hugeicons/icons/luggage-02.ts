import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLuggage02Icon],svg[hugeicons-luggage-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 2h6m-5 0v6m4-6v6M8.5 20.5V22H9v-1.5m6.5 0V22H15v-1.5"></svg:path><svg:path d="M13 20.5h-2c-2.357 0-3.536 0-4.268-.732C6 19.035 6 17.857 6 15.5V13c0-2.357 0-3.536.732-4.268S8.643 8 11 8h2c2.357 0 3.535 0 4.268.732S18 10.643 18 13v2.5c0 2.357 0 3.535-.732 4.268c-.733.732-1.911.732-4.268.732M10 11v6.5m4-6.5v6.5"></svg:path></svg:g>`,
})
export class HugeiconsLuggage02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
