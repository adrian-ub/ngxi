import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSinisterSmileIcon],svg[tdesign-sinister-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H8v1H6zm8 0h4v2h-2v1h-2zm-5.1 4.634l.5.865C9.922 15.4 10.89 16 12 16s2.08-.601 2.6-1.5l.5-.866l1.731 1.001l-.5.866A5 5 0 0 1 12 18a5 5 0 0 1-4.33-2.5l-.501-.865z"></svg:path>`,
})
export class TdesignSinisterSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
