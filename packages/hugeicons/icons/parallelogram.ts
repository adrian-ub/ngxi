import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParallelogramIcon],svg[hugeicons-parallelogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.091 8.545c.605-2.183.907-3.274 1.81-3.91C6.801 4 8.048 4 10.541 4h4.024c3.92 0 5.88 0 6.88 1.154c.997 1.154.522 2.87-.429 6.301l-1.108 4c-.605 2.183-.907 3.274-1.81 3.91c-.901.635-2.148.635-4.641.635H9.434c-3.92 0-5.88 0-6.88-1.154c-.998-1.154-.522-2.87.429-6.301z" color="currentColor"></svg:path>`,
})
export class HugeiconsParallelogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
