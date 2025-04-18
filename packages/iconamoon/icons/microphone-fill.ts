import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonMicrophoneFillIcon],svg[iconamoon-microphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4m-7 8a1 1 0 0 1 1 1a6 6 0 0 0 12 0a1 1 0 1 1 2 0a8 8 0 0 1-7 7.938V21a1 1 0 1 1-2 0v-2.062A8 8 0 0 1 4 11a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonMicrophoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
