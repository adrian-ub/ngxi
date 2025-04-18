import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPillarSpot2Icon],svg[cbi-pillar-spot-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 2C3.9 2 1.8 3.5 1.8 5.4v11.1c0 1.9 2.2 3.4 4.8 3.4s4.8-1.5 4.8-3.4V5.4C11.4 3.5 9.3 2 6.6 2m0 15.4c-1.9 0-3.4-.8-4-1.7c.6-.9 2.1-1.7 4-1.7s3.4.8 4 1.7c-.6.9-2.1 1.7-4 1.7M17.4 2c-2.7 0-4.8 1.5-4.8 3.4v11.1c0 1.9 2.2 3.4 4.8 3.4s4.8-1.5 4.8-3.4V5.4c0-1.9-2.1-3.4-4.8-3.4m0 15.4c-1.9 0-3.4-.8-4-1.7c.6-.9 2.1-1.7 4-1.7s3.4.8 4 1.7c-.6.9-2.1 1.7-4 1.7"></svg:path>`,
})
export class CbiPillarSpot2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
