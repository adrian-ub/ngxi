import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMassage1Icon],svg[subway-massage-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78.8 56.1v78.8H0V450h433.2v-78.8H512V56.1zm354.4 39.4L295.4 233.3L157.5 95.5zm-39.4 315H39.4V193.9l39.4 39.4v137.8h315.1v39.4zm78.8-78.7H118.2V115.2l177.2 177.2l177.2-177.2z"></svg:path>`,
})
export class SubwayMassage1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
