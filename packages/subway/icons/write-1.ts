import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayWrite1Icon],svg[subway-write-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 242.9h170.7V72.3H0zM213.3 93.6v42.7H512V93.6zm0 128H512v-42.7H213.3zm0 128H512v-42.7H213.3zm0 85.3H512v-42.7H213.3zM0 456.3h170.7V285.6H0z"></svg:path>`,
})
export class SubwayWrite1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
