import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityRackServerSolidBadgedIcon],svg[clarity-rack-server-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14v8h32v-8Zm6 5H6v-2h2Zm16 0H10v-2h14Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M2 30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6H2Zm8-3h14v2H10Zm-4 0h2v2H6Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:path fill="currentColor" d="M23.13 9H10V7h12.57a7.5 7.5 0 0 1-.07-1a7.5 7.5 0 0 1 .28-2H4a2 2 0 0 0-2 2v6h23.51a7.5 7.5 0 0 1-2.38-3M8 9H6V7h2Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityRackServerSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
