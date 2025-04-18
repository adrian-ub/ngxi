import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAccessibility24FilledIcon],svg[fluent-accessibility-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5M6.15 4.178a2.266 2.266 0 0 0-2.962 1.184A2.24 2.24 0 0 0 4.37 8.316L7.393 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.457a2.25 2.25 0 1 0 4.255 1.465l1.386-4.024a.25.25 0 0 1 .472 0l1.386 4.024a2.25 2.25 0 1 0 4.255-1.465l-1.875-5.457v-3.042a1 1 0 0 1 .61-.92l3.018-1.282a2.24 2.24 0 0 0 1.181-2.954a2.266 2.266 0 0 0-2.961-1.184l-1.606.682c-.34.144-.578.423-.695.73a3.794 3.794 0 0 1-7.098 0a1.28 1.28 0 0 0-.695-.73z"></svg:path>`,
})
export class FluentAccessibility24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
