import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowRightOutlineIcon],svg[mdi-eye-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5h1.1c-.1-.3-.1-.6-.1-1s0-.7.1-1.1c-.4 0-.7.1-1.1.1c-3.8 0-7.2-2.1-8.8-5.5c1.6-3.4 5-5.5 8.8-5.5s7.2 2.1 8.8 5.5c-.1.2-.3.4-.4.7c.7.2 1.3.4 1.9.8c.3-.5.5-1 .7-1.5c-1.7-4.4-6-7.5-11-7.5M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3m7 12v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiEyeArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
