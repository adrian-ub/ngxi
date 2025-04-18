import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonPasskey20FilledIcon],svg[fluent-person-passkey-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203q.143-.091.278-.19v-2.226a3.86 3.86 0 0 1-2-3.381zm8.99 0c0 1.306.835 2.418 2 2.83v1.986L16 18.858c0 .1.035.196.098.272l.599.728c.162.197.459.21.637.028l1.534-1.565a.43.43 0 0 0-.02-.62L17.5 16.5l1.351-1.177a.43.43 0 0 0 0-.646l-.939-.818A3.001 3.001 0 0 0 17 8a3 3 0 0 0-3 3m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentPersonPasskey20FilledIcon {
  readonly viewBox = input("0 0 20 21")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
