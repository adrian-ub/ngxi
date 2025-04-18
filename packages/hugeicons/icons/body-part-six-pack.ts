import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBodyPartSixPackIcon],svg[hugeicons-body-part-six-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6c0 1-1 3-5 3s-5-2-5-3c0 1-1 3-5 3S2 7 2 6m8-2.5C9.667 3 8.5 2 7 2m7 1.5C14.333 3 15.5 2 17 2M4 9v1c0 1.32.266 2.62.56 3.9c.54 2.346.81 5.68-.56 8.1M20 9v1c0 1.32-.266 2.62-.56 3.9c-.54 2.346-.81 5.68.56 8.1m-4-3c-1.485 1.179-2.356 1.369-3.677.282a.54.54 0 0 0-.664-.021C10.264 20.28 9.4 20.29 8 19m8-5c-1.485 1.179-2.356 1.369-3.677.282a.54.54 0 0 0-.664-.021C10.264 15.28 9.4 15.29 8 14m4 0v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsBodyPartSixPackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
