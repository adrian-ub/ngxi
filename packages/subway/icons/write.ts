import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayWriteIcon],svg[subway-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 439.5h170.7V268.8H0zm42.7-128H128v85.3H42.7zm170.6 106.7H512v-42.7H213.3zM0 226.2h170.7V55.5H0zm42.7-128H128v85.3H42.7zm170.6-21.4v42.7H512V76.8zm0 256H512v-42.7H213.3zm0-128H512v-42.7H213.3z"></svg:path>`,
})
export class SubwayWriteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
