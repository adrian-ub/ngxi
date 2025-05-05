import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStairs01Icon],svg[hugeicons-stairs-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M17.5 3.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v11c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-11c-.943 0-1.414 0-1.707-.293S3.5 19.443 3.5 18.5v-1c0-.943 0-1.414.293-1.707S4.557 15.5 5.5 15.5h2v-2c0-.943 0-1.414.293-1.707S8.557 11.5 9.5 11.5h2v-2c0-.943 0-1.414.293-1.707S12.557 7.5 13.5 7.5h2v-2c0-.943 0-1.414.293-1.707S16.557 3.5 17.5 3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsStairs01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
