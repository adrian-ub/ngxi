import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPaperboatIcon],svg[whh-paperboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 337L802 653q-12 21-34 35.5T726 703H300q-20 0-42-14.5T224 653L15 337q-18-33-13-57t32-24h197L469 18q18-18 43.5-18T556 18l238 238h198q27 0 32 24t-13 57"></svg:path>`,
})
export class WhhPaperboatIcon {
  readonly viewBox = input("0 0 1026 703")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
