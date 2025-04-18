import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRhombusArrowRightSolidIcon],svg[iconoir-rhombus-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.955.893a1.35 1.35 0 0 0-1.91 0L.894 11.045a1.35 1.35 0 0 0 0 1.91l10.151 10.15a1.35 1.35 0 0 0 1.91 0l10.151-10.15a1.35 1.35 0 0 0 0-1.91zM16.53 11.53a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H10c-.744 0-1.425.364-1.905.845c-.48.48-.845 1.161-.845 1.905v1a.75.75 0 0 0 1.5 0v-1c0-.256.136-.575.405-.845c.27-.27.589-.405.845-.405h4.19l-.72.72a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirRhombusArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
