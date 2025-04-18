import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDespiseFilledIcon],svg[tdesign-despise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h1v2h2v-2h1zm8 0h-4v2h1v2h2v-2h1zm-6 4a5 5 0 0 0-4.33 2.5l-.501.865L8.9 17.366l.5-.865C9.922 15.6 10.89 15 12 15s2.08.601 2.6 1.5l.5.866l1.731-1.001l-.5-.866A5 5 0 0 0 12 13"></svg:path>`,
})
export class TdesignDespiseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
