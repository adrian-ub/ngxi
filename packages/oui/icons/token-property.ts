import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenPropertyIcon],svg[oui-token-property-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.889 12V4h3.304c1.797 0 2.922 1.117 2.918 2.77c.004 1.652-1.144 2.746-2.976 2.746H6.822V12zm1.933-4.008h.953c.868 0 1.336-.472 1.332-1.222c.004-.73-.464-1.211-1.332-1.211h-.953z"></svg:path>`,
})
export class OuiTokenPropertyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
