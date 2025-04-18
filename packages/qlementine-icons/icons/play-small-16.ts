import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlaySmall16Icon],svg[qlementine-icons-play-small-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.72c0-.606.722-.943 1.21-.564l5.51 4.28a.71.71 0 0 1 0 1.13l-5.51 4.28c-.488.378-1.21.042-1.21-.564v-8.55z"></svg:path>`,
})
export class QlementineIconsPlaySmall16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
