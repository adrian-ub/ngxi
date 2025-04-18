import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroReceiveIcon],svg[hugeicons-euro-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h6m-6 4h6m5-8c-.948-1.23-2.305-2-3.811-2C6.323 4 4 6.786 4 10.222v3.556C4 17.214 6.323 20 9.189 20c1.506 0 2.863-.77 3.811-2m1.5-5H22m-7.5 0c0 .7 1.994 2.008 2.5 2.5M14.5 13c0-.7 1.994-2.008 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEuroReceiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
