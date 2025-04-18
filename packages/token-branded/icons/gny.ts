import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGnyIcon],svg[token-branded-gny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFEFFC" d="M9.285 4L11.5 5.28v12.86L9.315 20L5 17.2v-1.565l-2-1.34V8.95l2.185-.965l.43-2.07zm-2.83 2.53l-.44 2.11L4 9.55v4.25l2 1.335v1.56l3.25 2.05l1.25-1.035V5.81l-1.235-.75l-2.81 1.465zM14.715 4L12.5 5.28v12.86L14.685 20L19 17.2v-1.565l2-1.34V8.95l-2.185-.965l-.43-2.07zm2.83 2.53l.44 2.11L20 9.55v4.25l-2 1.335v1.56l-3.235 2.135l-1.265-1.115v-11.9l1.235-.75z"></svg:path>`,
})
export class TokenBrandedGnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
