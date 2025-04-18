import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceIcon],svg[hugeicons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.341 13.159C9.682 12.5 8.621 12.5 6.5 12.5s-3.182 0-3.841.659m7.682 0C11 13.818 11 14.879 11 17s0 3.182-.659 3.841m-7.682-7.682C2 13.818 2 14.879 2 17s0 3.182.659 3.841m0 0c.659.659 1.72.659 3.841.659s3.182 0 3.841-.659m4.881-16.063C16.74 6.297 17.5 7.056 17.5 8s-.76 1.703-2.278 3.222S12.944 13.5 12 13.5s-1.703-.76-3.222-2.278S6.5 8.944 6.5 8s.76-1.703 2.278-3.222S11.056 2.5 12 2.5s1.703.76 3.222 2.278m6.119 8.381c-.659-.659-1.72-.659-3.841-.659s-3.182 0-3.841.659m7.682 0C22 13.818 22 14.879 22 17s0 3.182-.659 3.841m-7.682-7.682C13 13.818 13 14.879 13 17s0 3.182.659 3.841m0 0c.659.659 1.72.659 3.841.659s3.182 0 3.841-.659M12.008 8H12" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
