import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPlayVideoIcon],svg[foundation-play-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.527 80.647a4.97 4.97 0 0 0 4.973-4.974V24.327a4.97 4.97 0 0 0-4.973-4.974H14.474A4.97 4.97 0 0 0 9.5 24.327v51.346a4.97 4.97 0 0 0 4.974 4.974zm-4.974-9.948H19.446V29.301h61.107z"></svg:path><svg:path fill="currentColor" d="m64.819 50.288l-11.98 6.913l-11.974 6.917V36.462l11.974 6.918z"></svg:path>`,
})
export class FoundationPlayVideoIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
