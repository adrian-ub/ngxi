import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsGitlabFill16Icon],svg[qlementine-icons-gitlab-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 6.19l-.022-.056l-2.18-5.53a.56.56 0 0 0-.564-.348a.56.56 0 0 0-.521.404l-1.47 4.38h-5.95L3.523.66A.55.55 0 0 0 3.33.374A.6.6 0 0 0 2.663.34a.56.56 0 0 0-.224.263L.26 6.133l-.021.056c-.314.797-.352 1.67-.11 2.49s.75 1.54 1.45 2.06l.007.006l.02.013l3.32 2.42l2.64 1.94a.685.685 0 0 0 .814 0l2.64-1.94l3.34-2.43l.009-.006c.699-.514 1.21-1.24 1.45-2.06s.203-1.69-.11-2.49z"></svg:path>`,
})
export class QlementineIconsGitlabFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
