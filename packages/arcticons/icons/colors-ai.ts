import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColorsAiIcon],svg[arcticons-colors-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-7.713 0l-1 37m.557-20.611l12.156.366M15.744 5.5l14.122 34.074m-9.694-23.392L11.351 42.5m4.733-14.121l9.276.322"></svg:path>`,
})
export class ArcticonsColorsAiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
