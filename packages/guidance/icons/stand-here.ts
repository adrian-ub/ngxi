import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceStandHereIcon],svg[guidance-stand-here-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.048 22.95l.151-.033c1.225-.283 1.906-1.473 1.802-2.718l-.196-2.336l-5.304.93l.636 2.213c.374 1.3 1.582 2.232 2.911 1.944Zm-4.416-7.18l-1.163-4.047a12.04 12.04 0 0 1 .31-7.585l.83-2.2S6.208 1 8.917 1l.956 2.85c.612 1.826.778 3.77.483 5.673l-.807 5.21zm12.32 7.18l-.151-.033c-1.225-.283-1.906-1.473-1.802-2.718l.196-2.336l5.304.93l-.636 2.213c-.374 1.3-1.582 2.232-2.911 1.944Zm4.416-7.18l1.163-4.047a12.04 12.04 0 0 0-.31-7.585l-.83-2.2S17.792 1 15.083 1l-.956 2.85a12.04 12.04 0 0 0-.483 5.673l.807 5.21z"></svg:path>`,
})
export class GuidanceStandHereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
