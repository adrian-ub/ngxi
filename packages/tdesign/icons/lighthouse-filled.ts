import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLighthouseFilledIcon],svg[tdesign-lighthouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2V1H7v9c0 2.393-.483 5.311-.979 7.669a71 71 0 0 1-.962 3.982l-.016.057l-.004.014l-.001.003L4.674 23h5.606l1-4h1.439l1 4h5.606l-.364-1.275l-.001-.003l-.004-.014l-.016-.057l-.061-.224a71 71 0 0 1-.9-3.758c-.497-2.358-.98-5.276-.98-7.669V1h-2v1zm6 2v1H9V4zm-1.996 4.998v2.004H11V8.998z"></svg:path>`,
})
export class TdesignLighthouseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
