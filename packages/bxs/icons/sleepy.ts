import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSleepyIcon],svg[bxs-sleepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-4 9.01l-2-.02C6.017 9.386 7.095 7 10 7v2c-1.924 0-1.998 1.805-2 2.01M12 18c-1.657 0-3-1.119-3-2.5s1.343-2.5 3-2.5s3 1.119 3 2.5s-1.343 2.5-3 2.5m5-7l-1 .008C15.992 10.536 15.826 9 14 9V7c2.935 0 4 2.393 4 4z"></svg:path>`,
})
export class BxsSleepyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
